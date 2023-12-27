import { Avatar, AvatarImage, AvatarFallback } from "components/ui/avatar";
import { Button } from "components/ui/button";
import { Input } from "components/ui/input";
import React from "react";
import Article from "public/Article.svg";

import Event from "public/Event.svg";
import Media from "public/media.svg";
import Image from "next/image";

const AddPost = () => {
  return (
    <div className=" lg:col-span-3">
      <div className="flex p-4 gap-4 items-start bg-white shadow-md rounded-md">
        <Avatar className="w-12 h-12">
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/127422698?s=96&v=4"
            alt="DP"
          />
          <AvatarFallback>SR</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-2">
          <Input placeholder="Start a post" className="w-full" />
          <div className="flex gap-3">
            <Button variant={"ghost"} className="flex gap-2">
              <Image src={Media} alt="media"></Image>
              <span>Media</span>
            </Button>
            <Button variant={"ghost"} className="flex gap-2">
              <Image src={Event} alt="event"></Image>
              <span>Event</span>
            </Button>
            <Button variant={"ghost"} className="flex gap-2">
              <Image src={Article} alt="article"></Image>
              <span>Article</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
