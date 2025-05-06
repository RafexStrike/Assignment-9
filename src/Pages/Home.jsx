import React from 'react';
import EventSponsorshipLayout from '../Components/EventSponsorship/EventSponsorship';
import SuccessStories from '../Components/SuccessStories/SuccessStories';
import UpcomingEvents from '../Components/UpcomingEvents/UpcomingEvents';
import Slider from '../Components/Slider/Slider';
import DynamicPageTitle from '../Components/DynamicPageTitle/DynamicPageTitle';

const Home = () => {
    return (
        <div>
            <DynamicPageTitle title="Home" />
            <Slider />
            <UpcomingEvents />
            <EventSponsorshipLayout />
            <SuccessStories />
        </div>
    );
};

export default Home;