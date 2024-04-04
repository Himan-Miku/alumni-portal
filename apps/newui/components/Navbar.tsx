"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { IoMdHome } from "react-icons/io";
import { PiStudentLight } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSquarePlus } from "react-icons/ci";
import { Button } from "./ui/button";

const Navbar = () => {
  let path = usePathname();
  const router = useRouter();
  console.log(path);
  const { data: session } = useSession();

  return (
    <nav
      className="sticky bottom-0 z-10 md:top-0  md:h-[100vh]
  bg-white p-4 shadow"
    >
      <div className="w-full md:w-min xl:w-[14rem] flex md:flex-col md:gap-12 h-full">
        <div className="hidden xl:block">
          <h1 className="text-2xl text-center flex gap-1 items-center text-blue-500">
            <span className="bg-blue-500 rounded-xl p-2 m-1 text-white">
              Alumni
            </span>
            Portal
          </h1>
        </div>
        <div className="w-full md:w-min md:justify-start items-start flex md:flex-col xl:mx-4 md:gap-12 xl:gap-[14px] ">
          <Link href={"/"} className={"navlink"}>
            <div className="flex items-end gap-3 text-lg">
              <IoMdHome size={28} />
              <span className="nav-names">Home</span>
            </div>
          </Link>
          <Link href={"/alumni"} className="navlink">
            <div className="flex items-end gap-3 text-lg">
              <PiStudentLight size={28} />
              <span className="nav-names">Alumni</span>
            </div>
          </Link>
          <Link href={"spir"} className="navlink">
            <div className="flex items-end gap-3 text-lg">
              <CiStar size={28} />
              <span className="nav-names">SPIR</span>
            </div>
          </Link>
          <Link href={"messages"} className="navlink ">
            <div className=" flex items-end gap-3 text-lg">
              <div>
                <AiOutlineMessage
                  size={28}
                  className="filter text-slate-500 brightness-75 saturate-50 "
                />
              </div>
              <span className="nav-names">Messages</span>
            </div>
          </Link>
          <Link href={"notifications"} className="navlink hidden md:block">
            <div className="flex items-end gap-3 text-lg">
              <IoIosNotificationsOutline size={28}></IoIosNotificationsOutline>
              <span className="nav-names">Notifications</span>
            </div>
          </Link>
          <Link href={"threads"} className="navlink">
            <div className="flex items-end gap-3 text-lg">
              <CiSquarePlus size={28} />
              <span className="nav-names">Threads</span>
            </div>
          </Link>
        </div>
        <div className="xl:mx-4 text-black gap-6 flex flex-col">
          <div className="flex items-center gap-2 text-xl">
            {session?.user ? (
              <>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    onClick={() => {
                      router.push("/profile");
                    }}
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </>
            ) : (
              <>
                <Link href="/auth/sign-in">
                  <Button className="w-16">Login</Button>
                </Link>
              </>
            )}
            {session?.user && <div className="nav-names">Vineet Babar</div>}
          </div>
          <div className="hidden md:flex items-center text-xl gap-6">
            <RxHamburgerMenu className="ml-2" />
            <div className="nav-names">More</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
