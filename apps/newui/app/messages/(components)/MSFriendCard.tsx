"use client";
import FriendCard from "./FriendCard";
import { MsgFriendStore } from "@/context/MsgFriendContext";

export default function MSFriendCard() {
  const { msgFriend } = MsgFriendStore();

  return (
    <>
      <FriendCard friend={msgFriend} />
    </>
  );
}
