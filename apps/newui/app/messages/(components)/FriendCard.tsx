import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface FriendCardProps {
  friend: {
    id: number;
    name: string;
    lastMessage: string;
  };
  isSelected: boolean;
}

export default function FriendCard({ friend, isSelected }: FriendCardProps) {
  return (
    <div
      className={`p-3 cursor-pointer rounded-md hover:shadow-md active:bg-[#f5f5f5] ${
        isSelected ? "navlink-2 bg-[#f5f5f5]" : ""
      }`}
    >
      <div className="flex gap-2 items-center">
        <div>
          <Avatar>
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/99860097?v=4"
              width={32}
            />
            <AvatarFallback>PP</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col justify-center w-full">
          <p className="text-lg font-semibold tracking-wider">{friend.name}</p>
          <p className="text-sm font-medium">{friend.lastMessage}</p>
        </div>
      </div>
    </div>
  );
}
