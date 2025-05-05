import React, { use } from "react";
import EventContext from "../../Contexts/Events/EventContext";
import EventCard from "../EventCard/EventCard";

const UpcomingEvents = () => {
  const eventContextValue = use(EventContext);
  const eventsData = eventContextValue.eventsData;
  console.log(eventsData);
  return (
    <div>
      <h1 className="w-max mx-auto text-2xl font-bold my-12 border-b-2 border-b-[#ff9fa0] border-solid p-2 px-3 rounded-md bg-[#f9e3e4]">
        Upcoming Events
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
        {eventsData.map((event) => (
          <EventCard key={event.id} event={event}></EventCard>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
