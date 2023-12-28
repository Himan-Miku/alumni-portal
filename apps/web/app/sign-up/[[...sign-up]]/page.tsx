import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
export default function Page() {
  return (
    <>
    <div className="h-full w-full flex items-center justify-center bg-white gap-2">
      <div className="w-[40%] m-7">
      <Image src="/sign-up.jpeg" alt="Log-in"  width={630} height={630}/>
      </div>
       <SignUp />
   </div>
   </>
  );
}