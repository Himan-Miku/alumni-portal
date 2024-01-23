import { Avatar } from "components/ui/avatar";
import { AvatarFallback, AvatarImage } from "components/ui/avatar";
import React from "react";
import { motion } from "framer-motion";
import { AiOutlineLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import LikeImg from "public/LikeImg.svg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "components/ui/carousel";
import { RxCross1 } from "react-icons/rx";
import Showmore from "app/compo/Showmore";
import Image from "next/image";

import LikeComments from "./LikeComments";
import Slider from "./Slider";
import { Post, User } from "app/types";
import { MotionDiv } from "./MotionDiv";

const Feed = (Prop: { data: Post; index: number }) => {
  let images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "aluimg.jpg",
  ];
  let feed = {
    name: "Gaurav Hedau",
    desc: "Ex-SDE Intern at @Reclimate | 4th year IT U.G (B.E) | Java | javascript | React…",
    imgdesc:
      "🚀 Exciting Milestone Achieved: 300+ Problems Completed! 🌟 Thrilled to share that I've successfully tackled 300+ problems on my learning the project and i am very the happy",
    likes: 30,
    comments: [
      {
        user: "Aman",
        desc: "Student at JSPM Rscoe",
        text: "Nice broo great going ..Keep it up",
      },
      {
        user: "ChatGPT",
        desc: "AI Language Model by OpenAI",
        text: "Woah now thats some kind of shit tbh. Well done dawg ",
      },
    ],
  };
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: 0.125,
        ease: "easeInOut",
        duration: 0.2,
      }}
      viewport={{ amount: 0 }}
      className="bg-white p-4 rounded-md flex flex-col gap-3 border-2 border-slate-300"
    >
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="">
            <Avatar className="w-14 h-14">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
                className="w-36"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <div className="text-xl font-semibold">
              {Prop?.data?.Uid?.name || feed.name}
            </div>
            <div className="text-slate-500 text-xs">
              <Showmore
                text={Prop?.data.Uid?.about || ""}
                limit={80}
                classText={"text-xs"}
              ></Showmore>
            </div>
          </div>
        </div>
        <div className="text-slate-500">
          <RxCross1></RxCross1>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 px-1">
        <div>
          <Showmore
            text={Prop?.data.description || feed.imgdesc}
            limit={150}
            classText={"text-sm"}
          ></Showmore>
        </div>
        <div className=" w-[75%] flex justify-center items-center ">
          <Slider
            imgarr={images.map((e) => {
              return "/home/slider/" + e;
            })}
          ></Slider>
        </div>
        <div className="flex justify-start items-center gap-1 w-full ">
          <Image src={LikeImg} alt="likes" width={30}></Image>
          <div>{Prop?.data.likes || feed.likes}</div>
        </div>
        <div className="w-full h-[1px] my-4 bg-slate-300"></div>
        <LikeComments comments={feed.comments}></LikeComments>
      </div>
    </MotionDiv>
  );
};

export default Feed;
