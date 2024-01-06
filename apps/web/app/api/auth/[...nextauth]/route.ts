/* eslint-disable turbo/no-undeclared-env-vars */


import  bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from 'next-auth';

import GoogleProvider from "next-auth/providers/google";
import LinkedinProvider from 'next-auth/providers/linkedin';


import User from 'schemas/User';
import connectDB from "lib/Connection";

export const handler=NextAuth({
      providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID ?? "",
          clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "" ,
        }),
        LinkedinProvider({
          clientId: process.env.LINKEDIN_CLIENT_ID ?? "" ,
          clientSecret: process.env.LINKEDIN_CLIENT_SECRET ?? "",
        }),
        CredentialsProvider({
           id: "credentials",
          name: "credentials",
          credentials: {
              email: { label: "email", type: "text",  },
              password: { label: "password", type: "password" },
            },
            async authorize(credentials): Promise<any> {
                if (!credentials) {
                    throw new Error('Credentials are not provided');
                  }
                await connectDB();
                // check to see if email and password is there
                try {
                   
                      // check to see if user exists
                      const user = await User.findOne({ email: credentials.email });
                      if (!user) {
                        return null;
                      }
                    
                      // check password
                      const isValid = await bcrypt.compare(credentials.password, user.hashedPassword);
                      if (!isValid) {
                        return null;
                      }
                    
                      // return user
                      return  user ;
                    
                } catch (error:any) {
                     return error;
                }
                
              }
      }),  
        ],
    // session:{strategy:"jwt"},
    pages: {
        signIn: '/auth/signin',
        // If set, new users will be directed here on first sign in
      },
      
     
      callbacks: {
        async jwt({ token, user,account }) {
          // console.log(token,user)
          return  token;
        },
        async session({ session, token, user }) {
          // Send properties to the client, like an access_token from a provider.
          session.user = token;
           
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


