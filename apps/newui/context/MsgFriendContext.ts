import { create } from "zustand";

interface IMsgFriendContext {
  msgFriend: {
    id: number;
    name: string;
    lastMessage: string;
  } | null;
  setMsgFriend: (f: { id: number; name: string; lastMessage: string }) => void;
}

export const MsgFriendStore = create<IMsgFriendContext>()((set) => ({
  msgFriend: null,
  setMsgFriend: (f: { id: number; name: string; lastMessage: string }) =>
    set({ msgFriend: f }),
}));
