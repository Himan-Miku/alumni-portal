/* eslint-disable turbo/no-undeclared-env-vars */


import  bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { DefaultSession } from 'next-auth';

import GoogleProvider from "next-auth/providers/google";
import LinkedinProvider from 'next-auth/providers/linkedin';


import User from '@/schemas/User';
import connectDB from "@/lib/Connection";
export interface ExtendedSession extends DefaultSession {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    access_token?: string | null; // Added access_token property
  };
}

const handler=NextAuth({
      providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID ?? "",
          clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "" ,
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
                    throw new Error('Credentials are not provided');
                  }
                console.log(credentials)
                await connectDB();
                // check to see if email and password is there
                try {
                   
                      // check to see if user exists
                      const user = await User.findOne({ email: credentials.email });
                      if (!user) {
                        return null;
                      }
                      console.log(user)
                    
                      // check password
                      const isValid = await bcrypt.compare(credentials.password, user.password);
                      if (!isValid) {
                        return null;
                      }
                    
                      // return user
                      return  user ;
                    
                } catch (error:any) {
                     return null;
                }
                
              }
      }),  
        ],
     session:{strategy:"jwt"},
     secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/auth/sign-in',
        newUser: "/auth/sign-up"
        // If set, new users will be directed here on first sign in
      },
      
     
      callbacks: {
        async jwt({ token, user,account }) {
          if (account) {
            token.accessToken = account.access_token
            console.log(token)
          }
          return token
         
        },
        async session({ session, token, user, }) {
          // Send properties to the client, like an access_token from a provider.
          
           
          return session;
        },
        async signIn(profile){
          console.log(profile.user)

         try {
          await connectDB();
          const ifuserexist=await User.findOne({email:profile.user.email});
          
          if(!ifuserexist){
            
              await User.create({
            name:profile.user.name,
            email:profile.user.email,
            image:profile.user.image,
            
          })
        }
          
         } catch (error) {
          console.log(error)
          return false;
         }

          
          return true;
        }
      },     
})

export {handler as GET,handler as POST};

