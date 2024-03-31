import MSFriendCard from "./MSFriendCard";
import Messages from "./Messages";
import MessagesInput from "./MessagesInput";

export default function MessagesScreen() {
  return (
    <div className="col-span-7 rounded-md shadow bg-white flex flex-col gap-2">
      <div className="info h-20">
        <MSFriendCard />
      </div>
      <div className="messages flex-grow">
        <Messages />
      </div>
      <div className="msginput h-14 px-4">
        <MessagesInput />
      </div>
    </div>
  );
}
