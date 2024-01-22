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
            user?.password!
          );
          if (!isValid) {
            return null;
          }

          // return user;
          console.log("authorize", user);
          return user;
        } catch (error: any) {
          console.log(error);
          return error;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/signin",
    // If set, new users will be directed here on first sign in
  },

  callbacks: {
    async jwt({ token, user, account }) {
      // console.log(token,user)

      if (user) {
        console.log("user found in token", user);
        token.uid = user?.id;
      }

      return Promise.resolve(token);
    },
    async session({ session, token, user }) {
      // session.user = token;
      // console.log(token);
      if (session != undefined && token) {
        session!.user!.id = token?.uid;
        await connectDB();
        const userExists: any = await User.findOne({
          _id: token?.uid,
        });
        let userData = { ...userExists };
        if (userExists) {
          // console.log("userData", userData);
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

      if (account?.provider == "google") {
        await connectDB();

        const userExists = await User.findOne({ email: user?.email });
        console.log("here");

        if (!userExists) {
          try {
            let res = await fetch("http://localhost:3000/api/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: user?.name,
                email: user?.email,
              }),
            });

            console.log(user);
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
        console.log("Login User : ", userExists);
        user.id = userExists?._id.toString()!;
      }
      return true;
    },
  },
});

export { handler as GET, handler as POST };
