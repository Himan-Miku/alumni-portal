import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SlOptionsVertical } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { Thread } from "@/types/types";
import Axios from "@/app/Axios";
import ThreadLikeComments from "./ThreadLikeComments";

interface Prop {
  singleThread: Thread;
}
const SingleThread = (prop: Prop) => {
  console?.log(prop);
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
            <h4 className="text-slate-400">TY IT A</h4>
          </div>
          <div className="flex gap-2 items-center">
            <h5 className="text-slate-400">2d</h5>

            <SlOptionsVertical />
          </div>
        </div>
        <div className="bg-text_bg leading-6 shadow-sm p-3  rounded-lg tracking-[0.5px]">
          {prop?.singleThread?.thread}
        </div>
        <ThreadLikeComments
          _id={prop?.singleThread?._id}
          likes={prop?.singleThread?.likes}
          comments={prop?.singleThread?.comments}
        ></ThreadLikeComments>
      </div>
    </div>
  );
};

export default SingleThread;
