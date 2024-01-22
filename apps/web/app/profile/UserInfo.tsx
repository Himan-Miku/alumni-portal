"use client";

// import { useQuery } from "react-query";
import InfoCard from "./InfoCard";
import About from "./About";
// import { User } from "app/types";
// import Axios from "app/Axios";
// import { Skeleton } from "shadcn/ui/skeleton";
import { useSession } from "next-auth/react";

const UserInfo = () => {
  // let user = useQuery("user", async () => {
  //   let data = await Axios.get("/api/user", {
  //     withCredentials: true,
  //   });
  //   // console.log(data);
  //   // add(user?.data!);
  //   // add(data?.data?.user as User);
  //   // console.log(AuthUser);
  //   return data?.data?.user as User;
  // });
  const { data } = useSession();
  let user = data?.user;
  console.log(user);

  return (
    <>
      {/* {user?.isLoading ? (
        <div className="flex flex-col gap-4">
          <Skeleton className="flex  flex-col h-80">
            <Skeleton className="w-full h-96  rounded-md  flex justify-center gap-4 items-center ">
              <Skeleton className="w-32 rounded-full aspect-square bg-slate-200"></Skeleton>
              <Skeleton className="flex flex-col gap-2">
                <Skeleton className="w-24 h-6 rounded-none bg-slate-200"></Skeleton>
                <Skeleton className="w-48 h-4 bg-slate-200"></Skeleton>
              </Skeleton>
            </Skeleton>
            <Skeleton className="h-full bg-slate-200"></Skeleton>
          </Skeleton>
          <Skeleton className="flex flex-col ">
            <Skeleton className="m-4 bg-slate-200 h-6 w-24 rounded-none"></Skeleton>
            <Skeleton className="mx-4 bg-slate-200 h-12 w-[90%] rounded-none"></Skeleton>
            <Skeleton className="m-4 my-6 bg-slate-200 h-8 w-24 rounded-none"></Skeleton>
            <Skeleton className="flex justify-between">
              <Skeleton>
                <Skeleton className="w-48 mx-4 bg-slate-200 h-5"></Skeleton>
                <Skeleton className="m-4 h-3 w-24 bg-slate-200"></Skeleton>
              </Skeleton>
              <Skeleton>
                <Skeleton className="w-48 mx-4 bg-slate-200 h-5"></Skeleton>
                <Skeleton className="m-4 h-3 w-24 bg-slate-200"></Skeleton>
              </Skeleton>
            </Skeleton>
            <Skeleton className="flex justify-between">
              <Skeleton>
                <Skeleton className="w-48 mx-4 bg-slate-200 h-5"></Skeleton>
                <Skeleton className="m-4 h-3 w-24 bg-slate-200"></Skeleton>
              </Skeleton>
              <Skeleton>
                <Skeleton className="w-48 mx-4 bg-slate-200 h-5"></Skeleton>
                <Skeleton className="m-4 h-3 w-24 bg-slate-200"></Skeleton>
              </Skeleton>
            </Skeleton>
          </Skeleton>
        </div>
      ) : (
        <>
        </>
      )} */}
      <InfoCard self User={user!}></InfoCard>
      <About self User={user!}></About>
    </>
  );
};

export default UserInfo;
