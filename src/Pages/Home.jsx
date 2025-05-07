import React, { useRef } from 'react';
import EventSponsorshipLayout from '../Components/EventSponsorship/EventSponsorship';
import SuccessStories from '../Components/SuccessStories/SuccessStories';
import UpcomingEvents from '../Components/UpcomingEvents/UpcomingEvents';
import Slider from '../Components/Slider/Slider';
import DynamicPageTitle from '../Components/DynamicPageTitle/DynamicPageTitle';
import SwiperTest from '../Components/SwiperTest/SwiperTest';

const Home = () => {
    const eventsRef = useRef(null);
    const handleScrollToEvents = () => {
        eventsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
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