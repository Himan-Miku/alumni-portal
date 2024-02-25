import SearchFriend from "./SearchFriend";

export default function ListHead() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-lg font-semibold tracking-wider py-2 px-3">
        Messages
      </h1>
      <div>
        <SearchFriend />
      </div>
    </div>
  );
}
