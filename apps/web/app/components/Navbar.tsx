import React from "react";
import Image from "next/image";

// import {
//   Avatar,
//   AvatarFallback,
//   AvatarImage,
// } from "@/components/ui/avatar";
import RscoeImg from "../../public/rscoe-logo.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 px-10 bg-white">
      <div className="flex items-center gap-16  lg:w-[40%]">
        <Image src={RscoeImg} alt="Logo" className="w-[2.99625rem]"></Image>
        <div className="hidden md:flex w-full justify-between lg:text-xl font-semibold text-black">
          <a href="/" className="">
            Home
          </a>
          <a href="/feed" className="">
            Feed
          </a>
          <a href="/alumni_talk" className=" ">
            Alumni Talk
          </a>
          <a href="/events" className="">
            Events
          </a>
          <a href="/about" className="">
            About
          </a>
        </div>
      </div>
      <div className="hidden md:block lg:text-xl text-black">
        <div>Sushant Rao</div>
        <div></div>
      </div>
      <div className="md:hidden flex bg-red-500">
        {/* <div className="">
          <a href="/" className="">
            Home
          </a>
          <a href="/feed" className="">
            Feed
          </a>
          <a href="/alumni_talk" className=" ">
            Alumni Talk
          </a>
          <a href="/events" className="">
            Events
          </a>
          <a href="/about" className="">
            About
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
