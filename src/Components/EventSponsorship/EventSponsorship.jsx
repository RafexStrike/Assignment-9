import React from "react";
import { FaHandshake, FaUsers, FaBullhorn, FaCalendarCheck } from "react-icons/fa";

const EventSponsorshipLayout = () => {
  return (
    <section className=" py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-primary">
            Partner With Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join forces with Eventora to create unforgettable experiences and reach
            our vibrant community of event enthusiasts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Custom Event Format Section */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3"
                alt="Custom Event"
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                Premium Package
              </div>
            </div>
            <div className="p-8">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 flex items-center gap-3">
                <FaHandshake className="text-primary" />
                Custom Event Format
              </h2>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Create your perfect event with our expert team. We'll handle everything
                from concept to execution, ensuring your vision comes to life.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <FaUsers className="text-primary" />
                  <span>Access to 500+ engaged attendees</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <FaBullhorn className="text-primary" />
                  <span>Comprehensive marketing campaign</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <FaCalendarCheck className="text-primary" />
                  <span>Full event management & support</span>
                </div>
              </div>
              <button className="mt-8 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition-colors duration-300 w-full">
                Get Started
              </button>
            </div>
          </div>

          {/* Event Series Sponsorship Section */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3"
                alt="Event Series"
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </div>
            </div>
            <div className="p-8">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 flex items-center gap-3">
                <FaCalendarCheck className="text-accent" />
                Event Series Sponsorship
              </h2>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Maximize your brand's visibility through our quarterly event series.
                Connect with our community through multiple touchpoints and build
                lasting relationships.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <FaCalendarCheck className="text-accent" />
                  <span>4 premium events per quarter</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <FaUsers className="text-accent" />
                  <span>50-150 attendees per event</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <FaBullhorn className="text-accent" />
                  <span>Brand activation opportunities</span>
                </div>
              </div>
              <button className="mt-8 bg-accent text-white px-6 py-3 rounded-full hover:bg-accent-dark transition-colors duration-300 w-full">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSponsorshipLayout;
