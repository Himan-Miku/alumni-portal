import React from "react";

const SelectOptions = () => {
  return (
    <div className="sticky top-5 right-0 rounded-sm flex p-4 flex-col gap-3 bg-white shadow">
      <h2 className="text-xl font-semibold">Select Feed</h2>
      <div>Select the type of content you want to see on Portal</div>
      <div className="flex flex-col gap-4">
        <div className="select_option">Students Threads</div>
        <div className="select_option">Alumni's Posts</div>
        <div className="un_select_option">SPIR Articles</div>
      </div>
    </div>
  );
};

export default SelectOptions;
