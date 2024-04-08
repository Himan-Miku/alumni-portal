"use client";
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { Comment } from "@/types/types";
import Axios from "@/app/Axios";

interface Prop {
  likes: string[];
  comments: Comment[];
  _id: string;
}

const playSound = (url: string) => {
  const audio = new Audio(url);
  audio.play();
};

const ThreadLikeComments = (prop: Prop) => {
  const LikeFn = async (action: string) => {
    let res = await Axios.post(
      `/api/thread/likes/${prop?._id}?action=${action}`,
      {
        _id: "6599324e7893780c49538d65",
      }
    );
    // console.log(res);
    if (res.data.success) {
      // prop?.likes?.push("6599324e7893780c49538d65");
      action == "add"
        ? setLikes((old) => [...old, "6599324e7893780c49538d65"])
        : setLikes(
            likes?.filter((item) => {
              return item != "6599324e7893780c49538d65";
            })
          );
      console.log("Likedddd");
    }
  };
  let [likes, setLikes] = useState<string[]>(prop?.likes);
  const [like, setLike] = useState(false);

  const handleClick = () => {
    setLike(!like);
  };

  return (
    <>
      <div className="flex font-semibold text-slate-500  gap-10 items-center">
        <div
          className="flex gap-2 items-center cursor-pointer"
          onClick={handleClick}
        >
          {likes?.includes("6599324e7893780c49538d65") ? (
            <AiFillHeart
              size={25}
              className="text-blue-500 heart-icon"
              onClick={() => {
                LikeFn("remove");
              }}
            />
          ) : (
            <FaRegHeart
              size={25}
              className=""
              onClick={() => {
                playSound("/like.mp3");
                LikeFn("add");
              }}
            />
          )}
          {likes?.length} Likes
        </div>
        <div className="flex gap-2 items-center">
          <FaRegComment size={22} />
          {prop?.comments?.length} Replies
        </div>
      </div>
    </>
  );
};

export default ThreadLikeComments;
