import React, { use, useState } from "react";
import EventContext from "../../Contexts/Events/EventContext";
import EventCard from "../EventCard/EventCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import DynamicPageTitle from "../DynamicPageTitle/DynamicPageTitle";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const UpcomingEvents = () => {
  const eventContextValue = use(EventContext);
  const eventsData = eventContextValue.eventsData;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    
    if (typeof window !== 'undefined') {
      const elements = document.querySelectorAll('[data-aos]');
      elements.forEach(element => {
        element.removeAttribute('data-aos-delay');
        element.removeAttribute('data-aos-duration');
        element.setAttribute('data-aos-once', 'false');
      });
    }

    AOS.init({
      startEvent: 'load',
      once: false,
      duration: 1000,
      offset: 50,
      delay: 0,
      mirror: true,
      anchorPlacement: 'top-bottom',
      disable: false,
      useClassNames: true,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99
    });

    const timer = setTimeout(() => {
      setIsLoaded(true);
      AOS.refresh();
    }, 100);

    const handleScroll = () => {
      if (isLoaded) {
        AOS.refresh();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoaded]);

  useEffect(() => {
    if (isLoaded && eventsData.length > 0) {
      AOS.refresh();
    }
  }, [eventsData, isLoaded]);

  return (
    <div className="mt-36 mb-12">
      {/* <DynamicPageTitle title="Upcoming Events" /> */}
      <div className="text-center mb-16">
        <div 
          className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 
            data-aos="fade-right"
            className="text-4xl lg:text-5xl font-bold mb-4 text-primary"
          >
            Upcoming Events
          </h2>
          <p 
            data-aos="fade-left"
            data-aos-delay="100"
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Discover what's happening next! Join us at inspiring, high-energy
            gatherings designed to connect, educate, and empower our vibrant
            community.
          </p>
        </div>
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
