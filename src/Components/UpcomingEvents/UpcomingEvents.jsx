import React, { use } from "react";
import EventContext from "../../Contexts/Events/EventContext";
import EventCard from "../EventCard/EventCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const UpcomingEvents = () => {
  const eventContextValue = use(EventContext);
  const eventsData = eventContextValue.eventsData;
  // console.log(eventsData);
  return (
    <div className="mt-36 mb-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary">
          Upcoming Events
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover what's happening next! Join us at inspiring, high-energy
          gatherings designed to connect, educate, and empower our vibrant
          community.
        </p>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="pb-12"
        >
          {eventsData.map((event) => (
            <SwiperSlide key={event.id}>
              <div className="flex justify-center">
                <EventCard event={event} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Tablet View */}
      <div className="hidden md:block lg:hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="pb-12"
        >
          {eventsData.map((event) => (
            <SwiperSlide key={event.id}>
              <div className="flex justify-center">
                <EventCard event={event} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="pb-12"
        >
          {eventsData.map((event) => (
            <SwiperSlide key={event.id}>
              <div className="flex justify-center">
                <EventCard event={event} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default UpcomingEvents;
