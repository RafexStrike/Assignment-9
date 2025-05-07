import React from "react";
import SwiperTest from "../SwiperTest/SwiperTest";
import { motion } from "framer-motion";

const Slider = ({ onJoinNowClick }) => {
  return (
    <div className="mt-20 mb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl  font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your City, Your Events{" "}
              <span className="text-primary">Explore Now</span>
            </motion.h1>
            
            <motion.p 
              className="text-gray-600 mt-6 "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Support local vibes! Join or host events to bring your community together!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button 
                onClick={onJoinNowClick}
                className="btn btn-primary mt-8  text-white  rounded-lg  font-semibold hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Events
              </button>
            </motion.div>

            {/* Stats Section */}
            <motion.div 
              className="mt-12 grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
     
            </motion.div>
          </motion.div>

          {/* Right Content - Swiper */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SwiperTest />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
