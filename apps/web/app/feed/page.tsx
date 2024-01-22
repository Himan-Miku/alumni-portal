import "../page.module.css";
import SelfInfo from "./selfinfo";
import MainFeed from "./mainfeed";
import AddPost from "./addpost";

const FeedPage = async () => {
  return (
    <>
      <div className="p-2">
        <div className="grid grid-rows-3  lg:grid-cols-10 gap-3">
          <SelfInfo></SelfInfo>
          <MainFeed></MainFeed>
          <AddPost></AddPost>
        </div>
      </div>
    </>
  );
};

export default FeedPage;
