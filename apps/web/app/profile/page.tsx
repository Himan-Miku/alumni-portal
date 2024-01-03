import React from "react";

import About from "./about";
import InfoCard from "./InfoCard";

const Profile = () => {
  return (
    <div className="flex gap-2 lg:mx-14 mt-6 mx-8">
      <div className="lg:w-[40%]  flex flex-col gap-2">
        <InfoCard></InfoCard>
        <About></About>
      </div>
      {/* <div className="bg-green-600">hello</div> */}
    </div>
  );
};

export default Profile;
