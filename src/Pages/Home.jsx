import React, { useEffect, useRef } from "react";
import EventSponsorshipLayout from "../Components/EventSponsorship/EventSponsorship";
import SuccessStories from "../Components/SuccessStories/SuccessStories";
import UpcomingEvents from "../Components/UpcomingEvents/UpcomingEvents";
import Slider from "../Components/Slider/Slider";
import DynamicPageTitle from "../Components/DynamicPageTitle/DynamicPageTitle";
import SwiperTest from "../Components/SwiperTest/SwiperTest";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const eventsRef = useRef(null);
  const handleScrollToEvents = () => {
    eventsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // useEffect(() => {
  //   AOS.init({ once: false, duration: 800 });

  //   const timeout = setTimeout(() => {
  //     AOS.refreshHard();
  //   }, 500);

  //   return () => clearTimeout(timeout);
  // }, []);

  return (
    <div>
      <DynamicPageTitle title="Home" />
      <Slider onJoinNowClick={handleScrollToEvents} />
      {/* <SwiperTest /> */}
      <div ref={eventsRef}>
        <UpcomingEvents />
      </div>
      <EventSponsorshipLayout />
      <SuccessStories />
    </div>
  );
};

export default Home;
