import "../page.module.css";
import { Button } from "components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "components/ui/avatar";
import SelfInfo from "./selfinfo";
import MainFeed from "./mainfeed";
import AddPost from "./addpost";
import LoadMore from "./LoadMore";

const FeedPage = async () => {
  return (
    <>
      <div className="p-2 min-h-[100vh]">
        <div className="grid grid-rows-3  lg:grid-cols-10 gap-3">
          {/* <SelfInfo></SelfInfo> */}
          <MainFeed></MainFeed>
          <AddPost></AddPost>
        </div>
      </div>
    </>
  );
};

export default FeedPage;
