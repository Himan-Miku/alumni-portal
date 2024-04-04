"use client";
import { LoginSchema } from "schemas";
import { useState, useTransition } from "react";
import React from "react";
import CardWapper from "./CardWapper";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "components/ui/button";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
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
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogContent,
  DialogTrigger,
} from "components/ui/dialog";

import { Label } from "components/ui/label";
import RecoverPassword from "./RecoverPassword";

const LoginForm = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  // 1. Define your form.
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof LoginSchema>) {
    setError("");
    setSuccess("");
    const { email, password } = values;
    console.log("values", values);
    startTransition(() => {
      const user = signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      console.log("user", user);
      if (user != null) {
        setSuccess("Login Successful");
        router.push("/profile");
      } else setError("Invalid Credentials");
    });
  }

  return (
    <>
      <CardWapper
        headerLabel="Enter the email and password"
        baclButtonLabel="Don't have an account?"
        backButtonHref="/auth/register"
        showSocial
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
            {/* <Dialog>
            <DialogTrigger asChild>
              <FormItem className="text-sm cursor-pointer text-slate-500">
                Forget Password ?
              </FormItem>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog> */}
            <RecoverPassword></RecoverPassword>
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button type="submit" className="w-full" disabled={isPending}>
              Login
            </Button>
          </form>
        </Form>
      </CardWapper>
    </>
  );
};

export default LoginForm;
