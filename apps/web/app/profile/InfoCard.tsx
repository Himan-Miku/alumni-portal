import { FaLinkedin } from "react-icons/fa";
import { Avatar, AvatarImage } from "components/ui/avatar";
import React from "react";
import { FiMapPin } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { Button } from "components/ui/button";
import { DialogInput } from "app/components/Dialog";
import { FaGithub } from "react-icons/fa";
import { BiSolidBadgeDollar } from "react-icons/bi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "components/ui/tooltip";
import { Toggle } from "@radix-ui/react-toggle";
import Axios from "app/Axios";
import { User } from "app/types";
import Logout from "app/components/Logout";

interface prop {
  User: User;
}

const InfoCard = (Prop: prop) => {
  console.log(Prop);
  return (
    <div className="bg-white rounded-sm shadow-md ">
      <div className="bg-bluebg flex gap-5 items-center justify-center p-4 rounded-sm">
        <Avatar className="w-40 h-40 border-2">
          <AvatarImage src="https://avatars.githubusercontent.com/u/127422698?v=4"></AvatarImage>
        </Avatar>

        <div>
          <div className=" flex  items-center  gap-1 text-yellow-500">
            <div className="text-text text-3xl font-semibold">
              {Prop?.User?.name}
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="text-3xl">
                    <BiSolidBadgeDollar></BiSolidBadgeDollar>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="text-lg text-black">Proud Alumni</div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="text-white">{Prop?.User?.about}</div>
        </div>
      </div>
      <div className=" p-4 px-8">
        <div className="flex gap-6 text-lightgray font-semibold">
          <div>
            <span className="text-black">{Prop?.User?.followers?.length}</span>{" "}
            Followers
          </div>
          <div>
            <span className="text-black ">{Prop?.User?.following?.length}</span>{" "}
            Following
          </div>
        </div>
        <div className="flex flex-col gap-1 mt-4 text-md font-bold text-graytext">
          {/* <div className="flex items-center gap-2">
            <FiMapPin size={20}></FiMapPin>
            <div>pune</div>
          </div> */}
          {Prop?.User?.email && (
            <div className="flex items-center gap-2">
              <CgMail size={20} />
              <div>{Prop?.User?.email}</div>
            </div>
          )}
          {Prop?.User?.linkedin && (
            <div className="flex items-center gap-2">
              <FaLinkedin size={20}></FaLinkedin>
              <div>{Prop?.User?.linkedin}</div>
            </div>
          )}
          {Prop?.User?.github && (
            <div className="flex items-center gap-2">
              <FaGithub size={20}></FaGithub>
              <div>{Prop?.User?.github}</div>
            </div>
          )}
        </div>
        <div className="mt-4 w-full flex gap-4">
          <DialogInput
            dialogRole="profile"
            buttonName="Edit Profile"
            userData={Prop?.User}
            buttoncss="bg-bluebg hover:bg-slate-900 hover:text-white text-white"
          ></DialogInput>
          <Logout></Logout>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
