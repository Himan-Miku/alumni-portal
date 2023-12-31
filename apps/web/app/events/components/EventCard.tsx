import Image from "next/image";
import React from "react";

const EventCard = () => {
  return (
    <div className="flex flex-col justify-start items-center m-5  w-[20rem] md:w-[25rem] p-5 rounded-xl bg-[#f0f4fa] hover:scale-105 shadow-md">
        <Image
          src="/home/alumnievent.png"
          alt="feed.svg"
          className="rounded-xl"
          width={500}
          height={400}
          />
          <div className="flex flex-col h-full w-full pt-3">
            <h4 className="text-[20px] font-[800] ">Alumni Meet 2023</h4>
            <p className="text-[15px] font-[400] text-ellipsis w-full line-clamp-2">The Alumni meet 2013 was conducted on March 16, 2013. The chief Guest of the meet was Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum nisi saepe dolorum praesentium, numquam eius veniam quos molestiae ullam iusto rem quidem at quia animi vero quaerat. Aut, perferendis mollitia.</p>
          </div>
    </div>
  )
};

export default EventCard;
