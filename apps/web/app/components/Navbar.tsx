"use client";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

import RscoeImg from "../../public/rscoe-logo.png";
import { Avatar, AvatarFallback, AvatarImage } from "components/ui/avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "components/ui/sheet";

import { Button } from "components/ui/button";
import { usePathname } from "next/navigation";

const Navbar = () => {
  // const router = useRouter();
  let pathname = usePathname();

  let nav = [
    {
      link: "/",
      title: "Home",
    },
    {
      link: "/feed",
      title: "Feed",
    },
    {
      link: "/alumni_talk",
      title: "Alumni Talk",
    },
    {
      link: "/events",
      title: "Events",
    },
    {
      link: "/about",
      title: "About",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between p-4 px-10 bg-white">
        <div className="flex items-center gap-16  lg:w-[50%]">
          <Image src={RscoeImg} alt="Logo" className="w-[2.99625rem]"></Image>
          <div className="  hidden lg:flex w-full gap-12 lg:text-lg font-semibold text-slate-800">
            {nav?.map((ele, ind) => {
              return (
                <Link
                  href={ele?.link}
                  key={ind}
                  className={`hover:font-semibold p-2 ${
                    pathname == ele.link && "selected"
                  }`}
                >
                  {ele?.title}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-3 lg:text-lg font-semibold text-slate-700">
          <div>Sushant Rao</div>
          <div>
            <Avatar>
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/127422698?s=96&v=4"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="lg:hidden  ">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <RxHamburgerMenu size={30}></RxHamburgerMenu>
              </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col font-semibold w-72 text-lg text-slate-900 gap-10">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 justify-center glass rounded-md p-3 shadow-md">
                  <div>Sushant Rao</div>
                  <div>
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/127422698?s=96&v=4"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="flex w-full flex-col gap-6">
                {nav?.map((ele, ind) => {
                  return (
                    <Link
                      href={ele?.link}
                      key={ind}
                      className={`hover:font-semibold p-2 ${
                        pathname == ele.link && " selected"
                      }`}
                    >
                      {ele?.title}
                    </Link>
                  );
                })}
              </div>

              <SheetFooter className="flex justify-center items-center">
                <SheetClose asChild>
                  <Button type="submit">Close</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};

export default Navbar;
