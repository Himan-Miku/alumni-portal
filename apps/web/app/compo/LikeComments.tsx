"use client";

import { Avatar, AvatarFallback, AvatarImage } from "components/ui/avatar";
import { Button } from "components/ui/button";
import React, { useState } from "react";

import { FaCommentAlt } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { Input } from "components/ui/input";

interface Props {
  comments: { user: string; desc: string; text: string }[];
}

const LikeComments = (prop: Props) => {
  let [open, isOpen] = useState<boolean>(false);
  let [liked, isLiked] = useState<boolean>(false);
  console.log(liked);

  return (
    <>
      <div className="grid grid-cols-2 gap-8 w-full ">
        <Button
          variant={"ghost"}
          className={`flex gap-1 items-center font-semibold text-lg`}
          onClick={() => {
            isLiked(!liked);
          }}
        >
          <div className={`${liked == true && "text-blue-600"}`}>
            <AiFillLike></AiFillLike>
          </div>
          <span className={`${liked == true && "text-blue-600"}`}>Like</span>
        </Button>
        <Button
          variant={"ghost"}
          onClick={() => {
            isOpen(!open);
          }}
          className="flex gap-1 items-center font-semibold text-lg"
        >
          <div>
            <FaCommentAlt />
          </div>
          <span>Comment</span>
        </Button>
      </div>
      {open && (
        <div className="w-full p-2">
          <div className="flex gap-2">
            <Avatar className="w-12 h-12">
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/127422698?s=96&v=4"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Input
              className="bg-white focus-visible:ring-0"
              placeholder="Type your message here."
            />
            <Button>Post</Button>
          </div>
          <div className="mt-12">
            {prop.comments && (
              <div className="flex flex-col gap-6">
                {prop.comments.map((elem) => {
                  return (
                    <div>
                      <div className="flex items-start gap-3 ">
                        <Avatar className="w-12 h-12">
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="bg-[#d9d9d9] px-3 py-1 rounded-md">
                          <div className="text-md font-semibold">
                            {elem?.user}
                          </div>
                          <div className="text-xs text-slate-500">
                            {elem?.desc}
                          </div>
                          <div className="py-2 text-sm">{elem?.text}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default LikeComments;
