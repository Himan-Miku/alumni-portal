import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SlOptionsVertical } from "react-icons/sl";
import { Comment } from "@/types/types";
import { FaRegHeart } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

interface Prop {
  singleComment: Comment;
}
const CommentComponent = (prop: Prop) => {
  return (
    <div className="flex gap-2">
      <div className="flex gap-2 flex-col items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="w-full flex flex-col gap-3">
        <div className="w-full flex justify-between">
          <div className="flex gap-2 items-center">
            <h3 className="font-semibold">
              {prop?.singleComment?.owner?.name}
            </h3>
            <h4 className="text-slate-400">TY IT A</h4>
          </div>
          <div className="flex gap-2 items-center">
            <h5 className="text-slate-400">2d</h5>
            <div>
              <SlOptionsVertical />
            </div>
          </div>
        </div>
        <div className="bg-text_bg leading-6 shadow-sm p-3  rounded-lg tracking-[0.5px]">
          {prop?.singleComment?.text}
          <div>
            <FaRegHeart></FaRegHeart>
            <AiFillHeart></AiFillHeart>
            <span>{prop?.singleComment?.likes?.length} Likes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentComponent;
