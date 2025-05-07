import React from "react";
import StreetFood from '../../assets/carousel/enjoying-street-food-fest.jpg'
import SwiperTest from "../SwiperTest/SwiperTest";
import { Link } from "react-router";
const Slider = ({ onJoinNowClick }) => {
  return (
    <div className="mt-20 mb-12 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0">
      <div className="w-full md:w-1/2 mx-auto">
      <h1 className="text-4xl font-bold">Your City, Your Events <br /> Explore Now</h1>
      <p className="text-gray-500 mt-4">Support local vibes! <br />Join or host events to bring your community together!</p>
      <button className="btn btn-primary mt-4 rounded-lg" onClick={onJoinNowClick}>Explore Events</button>
      </div>
      {/* <div className="carousel w-1/2 mx-auto">
        <div id="slide1" className="carousel-item relative w-full">
          <img
          
            src={StreetFood}
            className="w-full h-[500px] object-cover rounded-lg"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div> */}
      <div className="w-full md:w-1/2 mx-auto">
      <SwiperTest />
      </div>

    </div>
  );
};

export default Slider;
