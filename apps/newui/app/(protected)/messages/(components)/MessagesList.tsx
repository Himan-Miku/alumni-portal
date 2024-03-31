import FriendList from "./FriendList";
import ListHead from "./ListHead";

export default function MessagesList() {
  return (
    <div className="col-span-3 rounded-md shadow bg-white py-2 px-3 flex flex-col gap-3">
      <ListHead />
      <FriendList />
    </div>
  );
}
