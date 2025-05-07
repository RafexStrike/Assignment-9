import React from 'react';
import { FaCalendar, FaMapMarkerAlt, FaClock, FaUsers, FaImage, FaDollarSign, FaInfoCircle } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import DynamicPageTitle from '../DynamicPageTitle/DynamicPageTitle';

const Organize = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
       
        toast.success('Event submitted successfully! We will review and get back to you.');
    };

    return (
        <div className="py-8">
            <DynamicPageTitle title="Organize Event" />
            <div className="text-center mb-12">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-primary">
                    Organize Your Event
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Fill out the form below to start creating your unforgettable event experience.
                    Our team will review and get back to you within 24 hours.
                </p>
            </div>

          
            <div className="max-w-4xl mx-auto">
                <form onSubmit={handleSubmit} className="bg-[#F3EDDC] rounded-2xl p-8 shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     
                        <div className="col-span-2">
                            <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                                <FaInfoCircle className="text-primary" />
                                Event Name
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                                placeholder="Enter event name"
                            />
                        </div>

                    
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                                <FaCalendar className="text-primary" />
                                Event Date
                            </label>
                            <input
                                type="date"
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                            />
                        </div>

                    
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                                <FaClock className="text-primary" />
                                Event Time
                            </label>
                            <input
                                type="time"
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                            />
                        </div>

                  
                        <div className="col-span-2">
                            <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                                <FaMapMarkerAlt className="text-primary" />
                                Location
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                                placeholder="Enter event location"
                            />
                        </div>

                       
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                                <FaUsers className="text-primary" />
                                Expected Attendees
                            </label>
                            <input
                                type="number"
                                required
                                min="1"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                                placeholder="Number of attendees"
                            />
                        </div>

                     
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                                <FaDollarSign className="text-primary" />
                                Ticket Price
                            </label>
                            <input
                                type="number"
                                required
                                min="0"
                                step="0.01"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                                placeholder="Price per ticket"
                            />
                        </div>

                        {/* Event Banner */}
                        <div className="col-span-2">
                            <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                                <FaImage className="text-primary" />
                                Event Banner
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90"
                            />
                        </div>

                        {/* Event Description */}
                        <div className="col-span-2">
                            <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                                <FaInfoCircle className="text-primary" />
                                Event Description
                            </label>
                            <textarea
                                required
                                rows="4"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                                placeholder="Describe your event..."
                            ></textarea>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-8 text-center">
                        <button
                            type="submit"
                            className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors duration-300 font-semibold shadow-lg hover:shadow-xl"
                        >
                            Submit Event
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Organize;