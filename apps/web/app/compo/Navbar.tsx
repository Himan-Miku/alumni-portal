"use client";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

import RscoeImg from "../../public/rscoe-logo.png";

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
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  // const router = useRouter();

  const { data: session } = useSession();
  const router = useRouter();
  let pathname = usePathname();

  const user = session?.user;

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
  ];

  return (
    <>
      <div className="flex items-center justify-between p-4 px-10 bg-white sticky top-0 z-20 ">
        <div className="flex items-center gap-16  lg:w-[50%]">
          <Link href="/">
            <Image src={RscoeImg} alt="Logo" className="w-[2.99625rem]"></Image>
          </Link>

          <div className="links hidden lg:flex w-full gap-12 lg:text-lg font-semibold text-slate-800">
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
          {session?.user ? (
            <>
              <Link href="/profile">
                <div className="flex gap-2">
                  <div>{session.user.name}</div>
                  <Image
                    src={user?.image || "/user-profile-icon.svg"}
                    alt="Profile.img"
                    width={35}
                    height={35}
                    className="rounded-full "
                  ></Image>
                </div>
              </Link>
            </>
          ) : (
            <>
              <Link href="/auth/login">
                <Button className="w-full">Sign In</Button>
              </Link>
            </>
          )}
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <RxHamburgerMenu size={30}></RxHamburgerMenu>
              </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col font-semibold w-72 text-lg text-slate-900 gap-10">
              <SheetHeader>
                {session?.user ? (
                  <Link href="/profile">
                    <SheetTitle className="flex items-center gap-2 justify-center glass rounded-md p-3 shadow-md">
                      <div>{session?.user?.name}</div>
                      <div>
                        <Image
                          src={user?.image || "/user-profile-icon.svg"}
                          alt="profile image"
                          width={30}
                          height={30}
                          className="rounded-full"
                        />
                      </div>
                    </SheetTitle>
                  </Link>
                ) : (
                  <>
                    <Button
                      className="m-4"
                      onClick={() => router.push("/auth/login")}
                    >
                      {" "}
                      Login
                    </Button>
                  </>
                )}
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

              <SheetFooter className="flex justify-center gap-3 items-center w-full">
                <SheetClose>
                  {session?.user ? (
                    <Button onClick={() => signOut()} className="w-full">
                      Sign Out
                    </Button>
                  ) : (
                    <></>
                  )}
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
