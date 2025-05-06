import React from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTag,
  FaMoneyBill,
} from "react-icons/fa";
import { useNavigate } from "react-router";

const EventCard = ({ event }) => {
  const { thumbnail,id, name, category, date, location, entryFee, description } =
    event;

    const navigate = useNavigate();
    const handleViewMore = () => {
        navigate(`/event/${id}`)
    }

  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
      <figure className="h-56 overflow-hidden">
        <img src="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=600" alt={name} className="w-full object-cover" />
      </figure>
      <div className="bg-[#F3EDDC] card-body">
        <h2 className="card-title text-primary">{name}</h2>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

        <div className="mt-3 space-y-2 text-sm">
          <div className="flex items-center gap-2 text-gray-700">
            <FaTag className="text-accent" />
            <span>{category}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <FaCalendarAlt className="text-accent" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <FaMapMarkerAlt className="text-accent" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <FaMoneyBill className="text-accent" />
            <span>{entryFee}</span>
          </div>
        </div>

        <div className="card-actions justify-end mt-4">
          <button onClick={handleViewMore} className="btn btn-outline btn-primary btn-sm">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
