'use client'
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FcApproval } from "react-icons/fc";
import { LuDot } from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "./ui/button";
import { RiLinkedinBoxLine } from "react-icons/ri";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EditProfile from "./EditProfile";
import Skills from "./Skills";
import { useUser } from "@/hooks/useUser";

export interface ProfileProps {
  image?: string;
  name: string;
  passoutyear: number;
  Department?: string;
  Heading?: string;
  linkedin?: URL;
  lastseen?: Date;
  alumni: boolean;
  skills: string[];
  expertise: string[];
}
const Profile: React.FC<ProfileProps> = ({
  image,
  name,
  passoutyear,
  Department,
  Heading,
  linkedin,
  lastseen,
  alumni,
  skills,
  expertise,
}) => {
  const {user}=useUser();
  console.log(user);
  return (
    <>
      <div className="flex bg-white w-full max-w-[600px] rounded-2xl  justify-between items-center md:mt-5">
        <div className=" flex justify-center items-center gap-3 p-4 m-2 ">
          <Avatar className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]">
            <AvatarImage src={image} className="" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-1 ml-1">
            <div className="flex justify-between items-center gap-3">
              <h2 className="text-xl/4 font-bold text-left">{name}</h2>
              {alumni && (
                <Image
                  src="/verify.svg"
                  alt="verified"
                  width={12}
                  height={12}
                />
              )}
            </div>
            <div className="flex items-center justify-start   ">
              <h3>Batch {passoutyear}</h3>
              <LuDot />
              <h3>{Department}</h3>
            </div>
            <div className="flex text-base/3 text-muted-foreground">
              <h3>{Heading}</h3>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex justify-center items-center gap-4">
            <div className="shadow-lg drop-shadow-sm p-2 rounded-md">
              <Link href="/messages">
                <Image
                  src="/messaging.svg"
                  alt="message icon"
                  width={25}
                  height={25}
                  className="brightness-50 contrast-75 p-1"
                />
              </Link>
            </div>
            <div>
              {linkedin ? (
                <Link href={linkedin}>
                  <RiLinkedinBoxLine className="w-full h-full " />
                </Link>
              ) : (
                <>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="m-0  shadow-md drop-shadow-xl p-2 rounded-md"
                        variant="link"
                      >
                        <RiLinkedinBoxLine className="w-full h-full brightness-50 contrast-50" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>No Linkedin Provided</DialogTitle>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </>
              )}
            </div>
            <div>
              <EditProfile />
            </div>
          </div>
          {lastseen && <p>Last Seen on {lastseen.toLocaleDateString()}</p>}
        </div>
      </div>
      <Skills skills={skills} expertise={expertise} />
    </>
  );
};

export default Profile;
