import React, { use } from "react";
import EventContext from "../../Contexts/Events/EventContext";
import EventCard from "../EventCard/EventCard";

const UpcomingEvents = () => {
  const eventContextValue = use(EventContext);
  const eventsData = eventContextValue.eventsData;
  // console.log(eventsData);
  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary">
          Upcoming Events
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover what’s happening next! Join us at inspiring, high-energy
          gatherings designed to connect, educate, and empower our vibrant
          community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
        {eventsData.map((event) => (
          <EventCard key={event.id} event={event}></EventCard>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
