/* eslint-disable turbo/no-undeclared-env-vars */

import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { NextAuthOptions } from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import LinkedinProvider from "next-auth/providers/linkedin";
import User from "schemas/User";
import connectDB from "lib/Connection";

const handler = NextAuth({
  // adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    LinkedinProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID ?? "",
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET ?? "",
      authorization: { params: { scope: "profile email openid" } },
      issuer: "https://www.linkedin.com",
      jwks_endpoint: "https://www.linkedin.com/oauth/openid/jwks",
      async profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,

          email: profile.email,
          image: profile.picture,
        };
      },
    }),
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials): Promise<any> {
        if (!credentials) {
          throw new Error("Credentials are not provided");
        }
        await connectDB();
        // check to see if email and password is there
        try {
          console.log(credentials);
          // check to see if user exists
          const user = await User.findOne({ email: credentials.email });
          if (!user) {
            return null;
          }

          // check password
          const isValid = await bcrypt.compare(
            credentials.password,
            user?.password!,
          );
          if (!isValid) {
            return null;
          }

          // return user;
          console.log("authorize", user);
          return user;
        } catch (error: any) {
          console.log(error);
          return null;
        }
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/register",
    // If set, new users will be directed here on first sign in
  },
  // cookies: {
  //   sessionToken: {
  //     name: "next-auth.session-token",
  //     options: {
  //       httpOnly: true,
  //       sameSite: "none",
  //       // domain: ".",
  //       path: "/",
  //       // secure: true,
  //     },
  //   },
  // },
  callbacks: {
    async jwt({ token, user, account }) {
      // console.log(token,user)
      console.log("Account", account);
      if (account) {
        token.access_token = account.id_token;
      }

      if (user) {
        // console.log("user found in token", user);
        // console.log("Cookie", document.cookie);
        token.uid = user?.id;
      }

      return Promise.resolve(token);
    },
    async session({ session, token, user }) {
      // session.user = token;
      // console.log("Token in session", token);
      if (session != undefined && token) {
        session!.user!.id = token?.uid;
        await connectDB();
        const userExists: any = await User.findOne({
          _id: token?.uid,
        });

        session.access_token = token?.access_token;
        if (userExists) {
          session!.user = {
            ...session!.user,
            id: session!.user?.id!,
            ...userExists._doc!,
          };
        }
      }

      // console.log("After Mongodb", session.user);
      // add(userExists!);
      // console.log(process.env.NODE_ENV);
      return Promise.resolve(session);
    },
    async signIn({ user, account, profile }) {
      // console.log("user", user);
      // console.log("account", account);
      // console.log("profile", profile);

      if (account?.provider == "google" || account?.provider == "linkedin") {
        await connectDB();
        const userExists = await User.findOne({ email: user?.email });

        if (!userExists) {
          try {
            let res = await fetch(process.env.FRONTEND_URI + "/api/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: user?.name,
                email: user?.email,
              }),
            });

            // console.log(user);
            let response = await res.json();
            user.id = response.user._id;

            // add(response.user);
            // user.following = response.user.following;
            if (res.ok) {
              return true;
            }
          } catch (err) {
            return false;
          }
        }
        // console.log("Login User : ", userExists);
        user.id = userExists?._id.toString()!;
      }
      return true;
    },
  },
});

export { handler as GET, handler as POST };
