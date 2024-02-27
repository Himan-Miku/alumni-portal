import { Avatar, AvatarFallback, AvatarImage } from "components/ui/avatar";
import { Button } from "components/ui/button";
import React from "react";

const SelfInfo = () => {
  let data = {
    name: "Sushant rao",
    desc: "Full Stack Developer || TypeScript || AI Enthusiast ",
  };
  return (
    <div className="hidden col-start-3 lg:col-start-1 col-span-3  row-start-1 row-span-1  rounded-md lg:block">
      <div className="bg-bluebg p-8 lg:flex flex-col gap-3 shadow-xl rounded-md">
        <div className="flex justify-between items-center">
          <div className="w-60 flex flex-col gap-1">
            <div className="text-xl font-semibold text-text">{data.name}</div>
            <div className="text-md text-white ">{data.desc}</div>
          </div>
          <Avatar className="w-20 h-20">
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/127422698?s=96&v=4"
              alt="DP"
            />
            <AvatarFallback>SR</AvatarFallback>
          </Avatar>
        </div>
        <hr></hr>
        <div className="grid grid-cols-2 grid-rows-3 text-md font-semibold text-white">
          <div className="text-text">Profile Views</div>
          <div className="justify-self-end">23</div>

          <div className="text-text">Post Impressions</div>
          <div className="justify-self-end">5</div>

          <Button className="bg-text hover:bg-[#c35f37] text-bluebg text-md font-semibold">
            My Account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SelfInfo;
