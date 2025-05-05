import React, { useEffect, useState } from "react";
import EventContext from "./EventContext";

const EventProvider = ({ children }) => {
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("EventData.json")
      .then((res) => res.json())
      .then((data) => setEventsData(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  console.log(eventsData);

  const eventContextValue = {
    eventsData,
    loading,
  };
  return (
    <div>
      <EventContext value={eventContextValue}>
        {children}
      </EventContext>
    </div>
  );
};

export default EventProvider;
