import React from "react";
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
  const images = [
    "https://i.postimg.cc/c4ySYmjV/image-4.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Panam_City_04.jpg/1200px-Panam_City_04.jpg",
    "https://i.postimg.cc/KY4VCkwP/image-6.jpg"
  ]
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
        {images.map((image,i) => (
          <SwiperSlide key={i}>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  className="rounded-xl w-full h-full object-cover"
                  src={image}
                  alt={`Slide ${i}`}
                />
              </figure>
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperTest;