import React from "react";
import Slider from "./Slider";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import { LuMessageCircle } from "react-icons/lu";
import { Post } from "@/types/types";
import { BsDot } from "react-icons/bs";

interface Prop {
  data: Post;
}

const SinglePost = (prop: Prop) => {
  let data = {
    name: "Vineet babar",
    passoutYear: 2023,
    position: "Web developer",
    duration: "1d",
    desc: "This is the simplest way to learn AI ML",
    likes: 18,
    comments: 23,
  };
  return (
    <div className="flex items-start gap-2">
      <div className="w-full flex flex-col gap-3">
        <div className="flex gap-2">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
          <div className="">
            <div className="flex md:items-center md:gap-2 md:flex-row flex-col">
              <div className="text-lg font-semibold tracking-wider flex items-center gap-2">
                {data?.name}
                <Image
                  alt="blue tick"
                  src={"/tick.svg"}
                  width={13}
                  height={13}
                />
              </div>
              <div className="flex items-center">
                <div className="text-grey_text font-[600]">
                  Batch {data?.passoutYear}
                </div>
                <BsDot className="text-grey_text"></BsDot>
                <div className="text-grey_text font-[600]">
                  {data?.position}
                </div>
              </div>
            </div>
            <div className="">{prop?.data?.description}</div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Slider></Slider>
        </div>
        <div>
          <div className="flex gap-8 font-semibold  p-3 border-l-0 border-r-0">
            <div className="flex items-center text-slate-500 gap-2">
              <AiOutlineHeart size={24} />
              <div>{data?.likes} Likes</div>
            </div>
            <div className="flex text-slate-500 items-center gap-2">
              <LuMessageCircle size={24} />
              <div>{data?.comments} Comments</div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-grey_text  font-semibold">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="text-sm md:text-base">Write a reply ....</div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
