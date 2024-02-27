"use client";
import { RegisterSchema } from "schemas";
import { useEffect, useState, useTransition } from "react";
import React from "react";
import CardWapper from "./CardWapper";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "components/ui/form";
import { Input } from "components/ui/input";

import { FormError } from "../formerror";
import { FormSuccess } from "../formSuccess";
import { Register } from "actions/register";
import { redirect, useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const RegisterationForm = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [values, setValues] = useState<{ email: string; password: string } | null>(null);
  // 1. Define your form.
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  useEffect(() => {
    const asyncSignIn = async (values: { email: string; password: string }) => {
      const { email, password } = values;
      await signIn("credentials", { email, password, redirect: false });
      router.push("/profile");
    };
    if(values)
     asyncSignIn(values);
  }, [success])
  
  

 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof RegisterSchema>) {
    setError("");
    setSuccess("");
    setValues(values);
    startTransition(() => {
      Register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
       
      });
    });
  }
  return (
    <CardWapper
      headerLabel="Register to Login"
      baclButtonLabel="Already have account?"
      backButtonHref="/auth/login"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Password</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    type="password"
                    placeholder="******"
                    {...field}
                    autoComplete="new-password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full" disabled={isPending}>
            Create An Account
          </Button>
        </form>
      </Form>
    </CardWapper>
  );
};

export default RegisterationForm;
