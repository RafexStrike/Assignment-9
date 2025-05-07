import React, { useEffect } from "react";
// Import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay"; // Make sure to import autoplay CSS

const SwiperTest = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {[1, 2, 3, 4, 5].map((i) => (
          <SwiperSlide key={i}>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8="
                  alt={`Slide ${i}`}
                />
              </figure>
              {/* <div className="card-body">
                <h2 className="card-title">Slide {i}</h2>
                <p>This is some text for slide {i}. Looks good, right?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperTest;