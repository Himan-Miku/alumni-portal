import { FaLinkedin } from "react-icons/fa";
import { Avatar, AvatarImage } from "components/ui/avatar";
import React from "react";
import { FiMapPin } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { Button } from "components/ui/button";
import { DialogInput } from "app/components/Dialog";

const InfoCard = () => {
  let data = {
    Name: "Sushant Rao",
    about: "Full Stack Developer",
    followers: 1928,
    following: 19,
    location: "Pune",
    email: "raosushant71@gmail.com",
    linkedin: "in/sushant71rao",
    github: "github/sushant71rao",
  };

  return (
    <div className="bg-white rounded-sm shadow-md ">
      <div className="bg-bluebg flex gap-5 items-center justify-center p-4 rounded-sm">
        <Avatar className="w-40 h-40 border-2">
          <AvatarImage src="https://avatars.githubusercontent.com/u/127422698?v=4"></AvatarImage>
        </Avatar>
        <div>
          <div className="text-text text-3xl font-semibold">{data?.Name}</div>
          <div className="text-white">{data?.about}</div>
        </div>
      </div>
      <div className=" p-4 px-8">
        <div className="flex gap-6 text-lightgray font-semibold">
          <div>
            <span className="text-black">{data?.followers}</span> Followers
          </div>
          <div>
            <span className="text-black ">{data?.following}</span> Following
          </div>
        </div>
        <div className="flex flex-col gap-1 mt-4 text-md font-bold text-graytext">
          <div className="flex items-center gap-2">
            <FiMapPin size={20}></FiMapPin>
            <div>{data?.location}</div>
          </div>
          <div className="flex items-center gap-2">
            <CgMail size={20} />
            <div>{data?.email}</div>
          </div>
          <div className="flex items-center gap-2">
            <FaLinkedin size={20}></FaLinkedin>
            <div>{data?.linkedin}</div>
          </div>
        </div>
        <div className="mt-4">
          <DialogInput
            dialogRole="profile"
            buttonName="Edit Profile"
            userData={data}
            buttoncss="bg-bluebg hover:bg-slate-900 hover:text-white text-white"
          ></DialogInput>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
