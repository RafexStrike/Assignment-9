import React from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTag,
  FaMoneyBill,
} from "react-icons/fa";
import { useNavigate } from "react-router";

const EventCard = ({ event }) => {
  const { thumbnail, id, name, category, date, location, entryFee, description } = event;

  const navigate = useNavigate();
  const handleViewMore = () => {
    navigate(`/event/${id}`);
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={thumbnail} 
          alt={name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary text-white text-sm rounded-full font-medium">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6 bg-[#F3EDDC]">
        <h2 className="text-xl font-bold text-primary mb-2 line-clamp-1">{name}</h2>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2 text-gray-700">
            <FaCalendarAlt className="text-primary flex-shrink-0" />
            <span className="truncate">{date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <FaMapMarkerAlt className="text-primary flex-shrink-0" />
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <FaMoneyBill className="text-primary flex-shrink-0" />
            <span className="truncate">{entryFee}</span>
          </div>
        </div>

        <button 
          onClick={handleViewMore}
          className="mt-6 w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium flex items-center justify-center gap-2 group-hover:scale-105 transform transition-transform"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default EventCard;
