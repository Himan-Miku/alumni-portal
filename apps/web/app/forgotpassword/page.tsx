"use client";
import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useSearchParams } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "components/ui/form";
import { Input } from "components/ui/input";
import { Button } from "components/ui/button";
import Axios from "app/Axios";
import { toast } from "components/ui/use-toast";
import { UseQueryResult, useMutation, useQuery } from "react-query";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  password: z
    .string()
    .min(6, {
      message: "Password Should be minimum  of 6 characters",
    })
    .max(50),
  confirmPassword: z
    .string()
    .min(6, {
      message: "Password Should be minimum  of 6 characters",
    })
    .max(50),
});
const page = () => {
  let router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  const searchParams = useSearchParams();
  let token = searchParams.get("token");
  let id = searchParams.get("_id");

  let UpdatePass = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      let res = await Axios.post("/api/forgetpassword", {
        ...values,
        token: token,
        _id: id,
      });

      return res?.data;
    },
    onSuccess: (data) => {
      console.log(data);
      toast({
        title: "Success",
        description: data?.message,
      });
      router.push("/auth/login");
    },
    onError: (error: any) => {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Error Occured While Changing The Password",
        description: error?.data?.message || error?.response?.data?.message,
      });
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await UpdatePass?.mutate(values);
    } catch (error: any) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Error Occured While Changing The Password",
        description: error?.data?.message || error?.response?.data?.message,
      });
    }
  };

  return (
    <div className="min-h-[70vh] flex justify-center items-center ">
      <div className="bg-white  p-4">
        <div className="text-xl font-semibold text-bluebg">
          Recover Your Account{" "}
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col h-[16rem] justify-between w-[30rem] mt-4 gap-4"
          >
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="******" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="******" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <Button disabled={UpdatePass?.isLoading} type="submit">
              {UpdatePass?.isLoading ? "Please Wait" : "Update Password"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default page;
