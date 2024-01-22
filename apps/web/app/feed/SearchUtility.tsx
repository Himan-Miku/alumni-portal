import { TbMessage2Minus } from "react-icons/tb";
import { SearchDialog } from "./SearchDiialog";
import MyNetwork from "./MyNetwork";

const SearchUtility = () => {
  return (
    <div className="relative">
      <div className="flex justify-between px-4 p-1 bg-white rounded-md">
        <SearchDialog></SearchDialog>
        <div className="flex gap-4 text-slate-600">
          <div className=" flex flex-col items-center text-xs cursor-pointer">
            {/* <IoMdPeople size={24}></IoMdPeople>
            <div className="whitespace-nowrap">My Network</div> */}
            <MyNetwork></MyNetwork>
          </div>
          <div className=" flex flex-col items-center cursor-pointer text-xs">
            <TbMessage2Minus size={24}></TbMessage2Minus>
            <div>Messaging</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchUtility;
