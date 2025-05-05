import { createContext } from "react";

const EventContext = createContext({
  eventsData: [],
  loading: true
});

export default EventContext;
