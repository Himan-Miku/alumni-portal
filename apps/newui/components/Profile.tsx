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

export interface ProfileProps {
  image?: string;
  name: string;
  passoutyear: number;
  Domain?: string;
  Heading?: string;
  linkedin?: string;
  lastseen?: Date;
  alumni: boolean;
  skills: string[];
  expertise: string[];
}
const Profile: React.FC<ProfileProps> = ({
  image,
  name,
  passoutyear,
  Domain,
  Heading,
  linkedin,
  lastseen,
  alumni,
  skills,
  expertise,
}) => {
  return (
    <>
      <div className="flex bg-white w-[800px] rounded-2xl p-4 justify-between items-center mt-10">
        <div className="h-full flex justify-center items-center p-2 gap-4">
          <Avatar className="w-[100px] h-[100px]">
            <AvatarImage src={image} className="" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-4">
            <div className="flex justify-center items-center gap-3">
              <h2 className="text-2xl font-bold">{name}</h2>{" "}
              {alumni && <FcApproval className="w-4 h-4" />}
            </div>
            <div className="flex items-center justify-start gap-2 text-xl/3 ">
              <h3>{passoutyear}</h3>
              <LuDot />
              <h3>{Domain}</h3>
            </div>
            <div className="flex text-xl/3 text-muted-foreground">
              <h3>{Heading}</h3>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex  gap-4 mr-6   justify-center items-center ">
            <div className="shadow-xl drop-shadow-xl p-2 rounded-md">
              <Link href="/messages">
                <Image
                  src="/messaging.svg"
                  alt="message icon"
                  width={30}
                  height={30}
                  className="brightness-50 contrast-50 p-1"
                />
              </Link>
            </div>
            <div>
              {linkedin ? (
                <Link href={linkedin}>
                  <RiLinkedinBoxLine className="w-full h-full" />
                </Link>
              ) : (
                <>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="m-0  shadow-xl drop-shadow-2xl p-2 rounded-md"
                        variant="link"
                      >
                        <RiLinkedinBoxLine className="w-full h-full" />
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
