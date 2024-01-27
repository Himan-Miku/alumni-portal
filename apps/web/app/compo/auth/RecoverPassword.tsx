import React, { useState } from "react";
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogContent,
  DialogTrigger,
} from "components/ui/dialog";
import { FormItem } from "components/ui/form";
import { Button } from "components/ui/button";
import { Input } from "components/ui/input";
import { Label } from "components/ui/label";
import Axios from "app/Axios";
import { toast } from "components/ui/use-toast";

const RecoverPassword = () => {
  let [email, setEmail] = useState("");
  const handleSubmit = async () => {
    try {
      let resp = await Axios.get("/api/forgetpassword?email=" + email, {
        withCredentials: true,
      });
      toast({
        title: "Success",
        description: resp?.data?.message || "Mail Sent On Your Gmail Account",
      });
    } catch (error: any) {
      console.log(error);
      toast({
        title: "Error Occured!",
        description: error?.data?.message,
      });
    }
  };
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <FormItem className="text-sm cursor-pointer text-slate-500">
            Forget Password ?
          </FormItem>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] flex flex-col justify-start items-start">
          <DialogHeader>
            <DialogTitle>Recover Your Account</DialogTitle>
            <DialogDescription>
              Please Enter Your Email Associated with Alumni Portal
            </DialogDescription>
          </DialogHeader>
          <form className=" gap-2 w-full">
            <Label className="">Email</Label>
            <Input
              value={email}
              type="email"
              name="email"
              className="w-full"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></Input>
          </form>
          <Button type="submit" onClick={handleSubmit}>
            Proceed
          </Button>
          <DialogFooter></DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RecoverPassword;
