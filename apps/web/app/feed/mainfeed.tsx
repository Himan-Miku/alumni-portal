import SearchUtility from "./SearchUtility";
import Feed from "../components/Feed";
import LoadMore from "./LoadMore";
import { fetchFeed } from "../../actions/action";

const MainFeed = async () => {
  let data = await fetchFeed(0);

  // console.log(data?.map((ele) => ele));
  // console.log(postProp);
  return (
    <>
      <div className=" lg:col-start-4 row-span-3 col-span-4 flex flex-col gap-2 lg:gap-3 ">
        <SearchUtility></SearchUtility>
        {data?.map((elem, ind) => {
          return <Feed key={ind} data={elem} index={ind}></Feed>;
        })}
        {/* <Feed /> */}
        {/* {/* <Feed /> */}
        <LoadMore></LoadMore>
        {/* <div className="w-full h-20 testing "> hii</div> */}
      </div>
    </>
  );
};

export default MainFeed;
