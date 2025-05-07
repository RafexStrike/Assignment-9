import React from "react";
import { FaStar, FaQuoteLeft, FaChartLine, FaUsers, FaGlobe } from "react-icons/fa";

const SuccessStories = () => {
  const testimonials = [
    {
      name: "Mahbububa Nasrin",
      role: "Student, Jagannath University",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3",
      quote: "Eventora’s helped me join a tech workshop and host a poetry event easily!",
      rating: 5,
    },
    {
      name: "Md. Rashedul Islam",
      role: "Student, BRAC University",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
      quote: "Found a photography exhibition on Eventora, reserved a spot, and man I loved the local Bangaldeshi vibes it gave!",
      rating: 5,
    },
    {
      name: "Md. Rashedul Islam",
      role: "Student, North South University",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3",
      quote: "Eventora’s let me and my batchmates join an art workshop and host a career talk from NSU!",
      rating: 5,
    },
  ];

  const metrics = [
    {
      icon: <FaUsers className="text-4xl text-primary" />,
      value: "50,000+",
      label: "Event Attendees",
    },
    {
      icon: <FaChartLine className="text-4xl text-primary" />,
      value: "95%",
      label: "Client Satisfaction",
    },
    {
      icon: <FaGlobe className="text-4xl text-primary" />,
      value: "200+",
      label: "Events Organized",
    },
  ];

  return (
    <section className="mt-24 py-16 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. See what our users have to say about
            their experience with Eventora.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-[#F3EDDC] rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{metric.icon}</div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                {metric.value}
              </h3>
              <p className="text-gray-600">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#F3EDDC] rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4">
                <FaQuoteLeft className="text-primary opacity-20 text-4xl mb-2" />
                <p className="text-gray-700 italic">{testimonial.quote}</p>
              </div>
              <div className="flex text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories; 