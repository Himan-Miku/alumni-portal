"use client";
import { Button } from "components/ui/button";
import React from "react";
import { useSession } from "next-auth/react";
import { RiUserFollowFill } from "react-icons/ri";
import { useMutation } from "react-query";
import Axios from "@/app/Axios";

import { RiUserUnfollowFill } from "react-icons/ri";

interface prop {
  uid: string;
}

const FollowButton = (Prop: prop) => {
  const { data } = useSession();
  let isFollowing =
    data?.user?.following?.filter((elem) => {
      return elem == Prop?.uid;
    }).length != 0;
  // console.log(
  //   data?.user?.following?.filter((elem) => {
  //     return elem == Prop?.uid;
  //   }).length != 0
  // );

  let followMutate = useMutation({
    mutationFn: async (id: string) => {
      let res = await Axios.put(
        `/api/follow/${id}`,
        {
          _id: data?.user?._id,
        },
        {
          withCredentials: true,
        }
      );

      return res?.data;
    },
  });

  return (
    <>
      <Button
        // variant={"ghost"}
        disabled={isFollowing}
        className=" bg-bluebg text-lg text-white flex gap-2"
        onClick={() => {
          followMutate.mutate(Prop?.uid);
          window.location.reload();
        }}
      >
        <RiUserFollowFill></RiUserFollowFill>
        {!isFollowing ? "Follow" : "Following"}
      </Button>
      {isFollowing && (
        <Button
          onClick={() => {
            followMutate.mutate(Prop?.uid);
            window.location.reload();
          }}
          className="bg-bluebg flex gap-1 text-lg"
        >
          <RiUserUnfollowFill />
          Unfollow
        </Button>
      )}
    </>
  );
};

export default FollowButton;
