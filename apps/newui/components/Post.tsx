import React from "react";
import Slider from "./Slider";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import { LuMessageCircle } from "react-icons/lu";

const Post = () => {
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
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="w-full flex flex-col gap-3">
        <div className="flex gap-2">
          <div>
            <div className="flex items-center gap-2">
              <div className="text-lg font-semibold tracking-wider ">
                {data?.name}
              </div>
              <Image alt="blue tick" src={"/tick.svg"} width={13} height={13} />
              <div className="text-grey_text font-[600]">
                Batch {data?.passoutYear}
              </div>
              <div className="text-grey_text font-[600]">{data?.position}</div>
            </div>
            <div className="font-[600]">{data?.desc}</div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Slider></Slider>
        </div>
        <div>
          <div className="flex gap-8 font-semibold ">
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
        <div className="flex items-center gap-2 text-grey_text font-semibold">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>Write a reply ....</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
