"use client";
import React, { useContext, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { Comment } from "@/types/types";
import Axios from "@/app/Axios";
import { Button } from "./ui/button";
import { useUser } from "@/hooks/useUser";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { SlOptionsVertical } from "react-icons/sl";
import { ScrollArea } from "./ui/scroll-area";
import { Input } from "./ui/input";
import { useRouter } from "next/router";

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
  const { user } = useUser();
  let [comments, setComments] = useState<{
    comments: Comment[];
    isOpen?: boolean;
    isFetched?: boolean;
  }>({ comments: prop?.comments, isOpen: false, isFetched: false });
  const fetchComments = async function () {
    if (!comments?.isFetched) {
      try {
        let res = await Axios.get(`/api/thread/comment/${prop?._id}`);
        setComments({
          comments: res?.data?.comments,
          isOpen: true,
          isFetched: true,
        });
        console.log(res?.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      setComments((old) => ({ ...old, isOpen: !old.isOpen }));
      console.log("Already Fetched");
    }
  };

  const LikeFn = async (action: string) => {
    let res = await Axios.post(
      `/api/thread/likes/${prop?._id}?action=${action}`,
      {
        _id: user?._id,
      }
    );

    if (res.data.success) {
      action == "add"
        ? setLikes((old) => [...old, user?._id || ""])
        : setLikes(
            likes?.filter((item) => {
              return item != user?._id!;
            })
          );
    }
  };
  let [likes, setLikes] = useState<string[]>(prop?.likes);

  let [reply, setReply] = useState<string>();

  let ReplyFn = async () => {
    try {
      let resp = await Axios.post(`/api/thread/comment/${prop?._id}`, {
        text: reply,
        _id: user?._id,
      });
      if (resp?.data?.success) {
        setComments((old) => ({
          ...old,
          comments: [
            ...old.comments,
            {
              text: reply!,
              owner: user!,
              likes: [],
              _id: resp.data.data._id,
            },
          ],
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex font-semibold text-slate-500  gap-10 items-center">
        <div className="flex gap-2 items-center cursor-pointer">
          {likes?.includes(user?._id?.toString() || "") ? (
            <button
              onClick={() => {
                LikeFn("remove");
              }}
            >
              <AiFillHeart size={25} className="text-blue-500 heart-icon" />
            </button>
          ) : (
            <button
              onClick={() => {
                LikeFn("add");
                playSound("/like.mp3");
              }}
            >
              <FaRegHeart size={25} className="" />
            </button>
          )}
          {likes?.length} Likes
        </div>
        <button
          className="flex gap-2 items-center cursor-pointer"
          onClick={() => fetchComments()}
        >
          <FaRegComment size={22} />
          {comments?.comments?.length} Replies
        </button>
      </div>
      <ScrollArea
        className={`comments-container  ${comments.isOpen ? "open" : "closed"} p-2 `}
      >
        <div className="flex flex-col gap-2">
          {comments?.isOpen &&
            comments?.comments?.map((ele, ind) => {
              return (
                <ReplyComponent prop={ele} tid={prop?._id}></ReplyComponent>
              );
            })}
        </div>
      </ScrollArea>
      <div className="w-full flex gap-2 ">
        <Avatar>
          <AvatarImage src={user?.image}></AvatarImage>
        </Avatar>
        <input
          type="text"
          className=" p-2 w-full outline-none border-[1px] rounded-lg bg-slate-100"
          onChange={(e) => {
            setReply(e.target.value);
          }}
          placeholder="Write a reply"
        ></input>
        {reply != "" && reply != undefined && (
          <Button onClick={ReplyFn}>Post</Button>
        )}
      </div>
    </div>
  );
};

export default ThreadLikeComments;

export const ReplyComponent = (Prop: { prop: Comment; tid: string }) => {
  let { user } = useUser();
  let { prop, tid } = Prop;
  let [likes, setLikes] = useState<string[]>(prop?.likes ?? []);
  const playSound = (url: string) => {
    const audio = new Audio(url);
    audio.play();
  };
  let LikeFn = async (action: string) => {
    try {
      let res = await Axios?.post(
        `/api/thread/${tid}/comment/${prop?._id}?action=${action}`,
        {
          _id: user?._id,
        }
      );
      if (res?.data?.success) {
        if (action == "add") {
          setLikes((old) => [...old, user?._id!]);
        } else {
          setLikes((old) =>
            old?.filter((ele) => {
              return ele != user?._id;
            })
          );
        }
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex gap-3">
      <div className="flex gap-2 flex-col">
        <Avatar className="w-10 h-10">
          <AvatarImage src={prop?.owner?.image} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="w-full flex flex-col h-full gap-1">
        <div className="w-full flex justify-between">
          <div className="flex gap-2 items-center">
            <h3 className="font-semibold">{prop?.owner?.name}</h3>
            <h4 className="text-slate-400">TY IT A</h4>
          </div>

          {/* <div className="flex gap-2 items-center">
        <h5 className="text-slate-400">2d</h5>
        <div>
          <SlOptionsVertical />
        </div>
      </div> */}
        </div>

        <div className=" leading-6 rounded-lg tracking-[0.5px]">
          {prop?.text}
        </div>
      </div>
      <div className="pr-8 flex justify-center items-center gap-[2px]">
        {likes?.includes(user?._id?.toString() || "") ? (
          <button
            onClick={() => {
              LikeFn("remove");
            }}
          >
            <AiFillHeart size={22} className="text-blue-500 heart-icon" />
          </button>
        ) : (
          <button
            onClick={() => {
              LikeFn("add");
              playSound("/like.mp3");
            }}
          >
            <FaRegHeart size={18} className="" />
          </button>
        )}
        {/* <span>{likes?.length || ""}</span> */}
      </div>
    </div>
  );
};
