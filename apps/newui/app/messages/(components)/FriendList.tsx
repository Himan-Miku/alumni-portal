"use client";
import { useState } from "react";
import FriendCard from "./FriendCard";
import { MsgFriendStore } from "@/context/MsgFriendContext";

export default function FriendList() {
  const list = [
    {
      id: 1,
      name: "Himanshu",
      lastMessage: "Wassup Nigga",
    },
    {
      id: 2,
      name: "Manav",
      lastMessage: "Wassup Nigga",
    },
    {
      id: 3,
      name: "Sushant",
      lastMessage: "Wassup Nigga",
    },
    {
      id: 4,
      name: "Suyog",
      lastMessage: "Wassup Nigga",
    },
    {
      id: 5,
      name: "Deepanshu",
      lastMessage: "Wassup Nigga",
    },
    {
      id: 6,
      name: "Vineet",
      lastMessage: "Wassup Nigga",
    },
  ];

  const { setMsgFriend } = MsgFriendStore();
  const [selectedFriend, setSelectedFriend] = useState<number | null>(null);

  return (
    <div className="py-2">
      {list.map((f, i) => (
        <div
          key={i}
          onClick={() => {
            setSelectedFriend(f.id);
            setMsgFriend(f);
          }}
        >
          <FriendCard friend={f} isSelected={selectedFriend === f.id} />
        </div>
      ))}
    </div>
  );
}
