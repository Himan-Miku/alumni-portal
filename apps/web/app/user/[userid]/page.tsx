"use client";
import Axios from "app/Axios";
import About from "app/profile/About";
import Activity from "app/profile/Activity";
import InfoCard from "app/profile/InfoCard";
import { User } from "app/types";

export const dynamicParams = false;

export default async function page({ params }: { params: { userid: string } }) {
  let data: User = await Axios.get(`/api/user/${params?.userid}`, {
    withCredentials: true,
  }).then((res) => {
    return res.data?.user;
  });

  return (
    <div className="xl:grid flex flex-col xl:grid-cols-5 gap-4 lg:mx-14 mt-6 my-12 md:mx-8">
      <div className="xl:col-span-2  flex flex-col gap-4 ">
        <InfoCard User={data}></InfoCard>
        <About User={data}></About>
        {/* <UserInfo></UserInfo> */}
      </div>

      <div className="col-span-3 flex flex-col gap-4 ">
        {/* <Analytics></Analytics> */}
        <Activity></Activity>
      </div>
    </div>
  );
}

// export async function generateStaticParams() {
//   const UserPromise = GetUsers();
//   const users = (await UserPromise).data?.user!;

//   return users?.map((ele) => {
//     return {
//       userid: ele?._id,
//     };
//   });
// }
