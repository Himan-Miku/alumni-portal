import * as z from "zod";
export const LoginSchema= z.object({
    email: z.string().email({message:"Enter valid email"}),
    password: z.string().min(8,{message:"Enter password greater than 8 characters"}).max(20),
  });

export const RegisterSchema= z.object({
    email: z.string().email({message:"Enter valid email"}),
    password: z.string().min(8,{message:"Enter password greater than 8 characters"}).max(20),
    name: z.string().min(2,{message:"Enter valid first name"}).max(20),

  });