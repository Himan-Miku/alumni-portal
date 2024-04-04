import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SlOptionsVertical } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { Thread } from "@/types/types";

interface Prop {
  singleThread: Thread;
}
const SingleThread = (prop: Prop) => {
  let data = {
    name: "Sam Altman",
    class: "TY IT",
    time: "1d",
    thread:
      "So someone named Roy Bates decided to take it over and turn it into his own country in International Waters. So someone named Roy Bates decided to take it over and turn it into his own country in International Waters.",
    likes: 19,
    replies: 22,
  };
  return (
    <div className="flex gap-2">
      <div className="flex gap-2 flex-col items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="w-[1.8px] bg-slate-300 h-full rounded-md"></div>
      </div>
      <div className="w-full flex flex-col gap-3">
        <div className="w-full flex justify-between">
          <div className="flex gap-2 items-center">
            <h3 className="font-semibold">{prop?.singleThread?.Uid?.name}</h3>
            <h4 className="text-slate-400">{data?.class}</h4>
          </div>
          <div className="flex gap-2 items-center">
            <h5 className="text-slate-400">{data?.time}</h5>

            <SlOptionsVertical />
          </div>
        </div>
        <div className="bg-text_bg leading-6 shadow-sm p-3  rounded-lg tracking-[0.5px]">
          {prop?.singleThread?.thread}
        </div>
        <div className="flex font-semibold text-slate-500  gap-10 items-center">
          <div className="flex gap-2 items-center">
            <FaRegHeart size={22} />
            {prop?.singleThread?.likes?.length} Likes
          </div>
          <div className="flex gap-2 items-center">
            <FaRegComment size={22} />
            {prop?.singleThread?.comments?.length} Replies
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleThread;
