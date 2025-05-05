import React, { useEffect, useState } from "react";
import EventContext from "./EventContext";

const EventProvider = ({ children }) => {
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/EventData.json")
      .then((res) => res.json())
      .then((data) => {
        setEventsData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const eventContextValue = {
    eventsData,
    loading,
  };

  return (
    <EventContext.Provider value={eventContextValue}>
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;
