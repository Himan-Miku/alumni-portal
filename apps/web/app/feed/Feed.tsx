import { Avatar } from "components/ui/avatar";
import { AvatarFallback, AvatarImage } from "components/ui/avatar";
import React from "react";
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
import Showmore from "app/components/Showmore";
import Image from "next/image";

import LikeComments from "./LikeComments";

const Feed = () => {
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
  return (
    <div className="bg-white p-4 rounded-md flex flex-col gap-3">
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
            <div className="text-xl font-semibold">{feed.name}</div>
            <div className="text-slate-500 text-xs">
              <Showmore
                text={feed.desc}
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
      <div className="flex flex-col items-center px-1">
        <div>
          <Showmore
            text={feed.imgdesc}
            limit={150}
            classText={"text-sm"}
          ></Showmore>
        </div>

        <Carousel className="w-full max-w-xs ">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div>
                    <div className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="flex justify-start items-center gap-1 w-full ">
          <Image src={LikeImg} alt="likes" width={30}></Image>
          <div>{feed.likes}</div>
        </div>
        <div className="w-full h-[1px] my-4 bg-slate-300"></div>
        <LikeComments comments={feed.comments}></LikeComments>
      </div>
    </div>
  );
};

export default Feed;
