import React from "react";

import About from "./About";
import InfoCard from "./InfoCard";
import Analytics from "./Analytics";
import Activity from "./Activity";
import { DialogInput } from "app/components/Dialog";

const Profile = () => {
  return (
    <div className="xl:grid flex flex-col xl:grid-cols-5 gap-4 lg:mx-14 mt-6 md:mx-8">
      <div className="xl:col-span-2  flex flex-col gap-4 ">
        <InfoCard></InfoCard>
        <About></About>
      </div>

      <div className="col-span-3 flex flex-col gap-4 ">
        <Analytics></Analytics>
        <Activity></Activity>
      </div>
    </div>
  );
};

export default Profile;
