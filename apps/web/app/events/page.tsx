import React from "react";
import EventCard  from "./components/EventCard";

const Events = () => {
  return <div className="h-max w-[100%] ">
    <h3 className="text-center font-semibold text-3xl font-sans m-4 font-[400] relative underline-offset-[10px] underline lg:text-4xl">
      “ Some Past Events”
    </h3>

    <div className="h-10"></div>

    {/* Using grid Layout */}
    {/* <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2  md:gap-x-5 lg:gap-x-10 justify-center items-start">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div> */}

    {/* //Using flex Layout */}
    <div className="flex flex-wrap justify-center items-center">
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
    </div>

    <div className="h-10"></div>  

  </div>;
}

export default Events;