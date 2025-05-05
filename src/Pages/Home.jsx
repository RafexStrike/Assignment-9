import React from 'react';
import Slider from '../Components/Slider/Slider';
import UpcomingEvents from '../Components/UpcomingEvents/UpcomingEvents';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <UpcomingEvents></UpcomingEvents>
        </div>
    );
};

export default Home;