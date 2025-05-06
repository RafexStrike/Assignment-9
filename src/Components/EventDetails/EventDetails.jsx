import React, { useState, Suspense } from "react";
import { useParams } from "react-router";
import EventContext from "../../Contexts/Events/EventContext";
import { use } from "react";
import {
  FaTag,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaMoneyBill,
} from "react-icons/fa";
import ErrorPage from "../../Pages/ErrorPage";
import { toast } from "react-hot-toast";
import DynamicPageTitle from "../DynamicPageTitle/DynamicPageTitle";

const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-[60vh]">
    <span className="loading loading-spinner loading-lg"></span>
  </div>
);

const EventDetails = () => {
  const { eventId } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const eventContextValue = use(EventContext);
  const { eventsData, loading } = eventContextValue;

  if (loading) {
    return <LoadingSpinner />;
  }

  const event = eventsData.find((event) => event.id.toString() === eventId);

  if (!event && !loading) {
    return <ErrorPage />;
  }

  const { name, category, date, location, entryFee, description } = event;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Seat reserved successfully!");
    setFormData({ name: "", email: "" });
  };

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <DynamicPageTitle title="Event Details" />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Event Details Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="mb-6">
              <img
                src="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt={name}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            
            <h1 className="text-3xl font-bold text-primary mb-4">{name}</h1>
            <p className="text-gray-600 mb-6">{description}</p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <FaTag className="text-accent text-xl" />
                <span className="text-lg">{category}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <FaCalendarAlt className="text-accent text-xl" />
                <span className="text-lg">{date}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <FaMapMarkerAlt className="text-accent text-xl" />
                <span className="text-lg">{location}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <FaMoneyBill className="text-accent text-xl" />
                <span className="text-lg">{entryFee}</span>
              </div>
            </div>
          </div>

          {/* Reservation Form Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-primary mb-6">Reserve Your Seat</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email"
                />
              </div>

              <button
                type="submit"
                className="w-full btn btn-primary text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
              >
                Reserve Seat
              </button>
            </form>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default EventDetails;
