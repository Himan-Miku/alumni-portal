"use server";
import User from 'schemas/User';
import connectDB from 'lib/Connection';
import * as z from 'zod';
import { RegisterSchema } from 'schemas';
import bcrypt from 'bcrypt';
export const Register =async (values:z.infer<typeof RegisterSchema>) => {
     const validatedFields= RegisterSchema.safeParse(values);

     if(!validatedFields.success){
        return{error:"Invalid fields"}
     }
     const{email,password,name}=validatedFields.data;
    const hashedPassword= await bcrypt.hash(password,10);
     await connectDB();
    const existingUser= await User.findOne({email:email})
         if(existingUser){
          return {error:"User already exists"}  
   }
      await User.create({
          name:name,
          email:email,
          hashedPassword:hashedPassword}) 
     
     return {success:"Registered Successfully!"}
}