"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { IoMdHome } from "react-icons/io";
import { PiStudentLight } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSquarePlus } from "react-icons/ci";

const Navbar = () => {
  let path = usePathname();
  const router=useRouter();
  console.log(path);

  return (
    <nav
      className="sticky top-0 h-[100vh]
  bg-white p-4 shadow"
    >
      <div className="w-min xl:w-[18rem] flex flex-col gap-16 h-full">
        <div className="hidden xl:block">
          <h1 className="text-3xl flex gap-1 items-center text-blue-500">
            <span className="bg-blue-500 rounded-xl p-2 m-1 text-white">
              Alumni
            </span>
            Portal
          </h1>
        </div>
        <div className=" justify-start items-start flex flex-col xl:mx-4 gap-12 xl:gap-7 ">
          <Link href={"/"} className={"navlink"}>
            <div className="flex items-end gap-3 text-xl">
              <IoMdHome size={28} />
              <span className="nav-names">Home</span>
            </div>
          </Link>
          <Link href={"/alumni"} className="navlink">
            <div className="flex items-end gap-3 text-xl">
              <PiStudentLight size={28} />
              <span className="nav-names">Alumni</span>
            </div>
          </Link>
          <Link href={"spir"} className="navlink">
            <div className="flex items-end gap-3 text-xl">
              <CiStar size={28} />
              <span className="nav-names">SPIR</span>
            </div>
          </Link>
          <Link href={"messages"} className="navlink ">
            <div className=" flex items-end gap-3 text-xl">
              <Image
                src={"/messaging.svg"}
                alt="messaging"
                className="ml-[4px]"
                width={22}
                height={20}
              ></Image>
              {/* <div>
                <FiMessageSquare
                  size={28}
                  className="filter brightness-75 saturate-50 "
                />
              </div> */}
              <span className="nav-names">Messages</span>
            </div>
          </Link>
          <Link href={"notifications"} className="navlink">
            <div className="flex items-end gap-3 text-xl">
              <IoIosNotificationsOutline size={28}></IoIosNotificationsOutline>
              <span className="nav-names">Notifications</span>
            </div>
          </Link>
          <Link href={"threads"} className="navlink">
            <div className="flex items-end gap-3 text-xl">
              <CiSquarePlus size={28} />
              <span className="nav-names">Threads</span>
            </div>
          </Link>
        </div>
        <div className="xl:mx-4 gap-6 flex flex-col">
          <div className="flex items-center gap-2 text-xl">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" onClick={()=>{router.push('/profile')}} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="nav-names">Vineet Babar</div>
          </div>
          <div className="flex items-center text-xl gap-6">
            <RxHamburgerMenu className="ml-2" />
            <div className="nav-names">More</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
