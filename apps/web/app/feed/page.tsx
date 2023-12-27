import "../page.module.css";
import { Button } from "components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "components/ui/avatar";
import SelfInfo from "./selfinfo";
import MainFeed from "./mainfeed";
import AddPost from "./addpost";

const FeedPage = () => {
  return (
    <div className="px-2">
      <div className="grid grid-rows-3  lg:grid-cols-10 gap-6">
        <SelfInfo></SelfInfo>
        <MainFeed></MainFeed>
        <AddPost></AddPost>
      </div>
    </div>
  );
};

export default FeedPage;
