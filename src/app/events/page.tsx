"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Instagram,
  Linkedin,
  Search,
} from "lucide-react";
import Footer from "@/Components/Footer";
import Image from "next/image";

const EventsPage = () => {
  // Sample event data based on your JSON structure
  const eventData = [
    {
      eventId: "E003",
      eventName: "Web Development 3 Day Workshop",
      eventDate: "27",
      eventMonth: "September",
      eventYear: "2024",
      eventTime: "11:30 AM - 01:30 PM",
      location: "E - 107",
      description:
        "The 3-day event starts on 25th Sept with UI/UX fundamentals, followed by React.js hands-on on 26th, and wraps up on 27th with Firebase backend development",
      instagramLink: "https://instagram.com/techtalk_ai",
      linkedInLink: "https://linkedin.com/company/techtalk_ai",
      posterPhoto: "/Events/WEBDEV_27_SEP_2024.png",
      Speaker: {
        name: "Tousif Tamboli",
        Position: "TYDS Student",
        Company: "GHRCEM",
        bio: "Dr. Jane Smith is a leading AI researcher with over 10 years",
        photo: "/speakers/jane_smith.jpg",
      },
      status: "completed",
    },
    {
      eventId: "E002",
      eventName: "SY Induction",
      eventDate: "26",
      eventMonth: "July",
      eventYear: "2024",
      eventTime: "11:30 AM - 1:30 PM",
      location: "E - 115",
      description:
        "SyInduction was organized to raise awareness among students about the ACM Student Chapter, its vision, activities, and the opportunities it offers to grow in the world of computing and technology.",
      instagramLink: "https://instagram.com/techtalk_ai",
      linkedInLink: "https://linkedin.com/company/techtalk_ai",
      posterPhoto: "/Events/SYINDUCTION_26_JULY_2024.jpg",
      Speaker: {
        name: "ACM TEAM",
        Position: "",
        Company: "GHRCEM (2024 - 2025)",
        bio: "Dr. Jane Smith is a leading AI researcher with over 10 years",
        photo: "/speakers/jane_smith.jpg",
      },
      status: "completed",
    },
    {
      eventId: "E001",
      eventName: "Inauguration Ceremony",
      eventDate: "14",
      eventMonth: "March",
      eventYear: "2024",
      eventTime: "11:30 AM - 12:30 PM",
      location: "E - 110",
      description:
        "The ACM Club was officially inaugurated on 14th March 2024, marking the beginning of a dynamic community for tech enthusiasts. The event featured insightful talks, future plans, and a shared vision to foster innovation, collaboration, and learning among students.",
      instagramLink: "https://instagram.com/techtalk_ai",
      linkedInLink: "https://linkedin.com/company/techtalk_ai",
      posterPhoto: "/Events/INAUGURATION_11_MAR_2024.jpeg",
      Speaker: {
        name: "Amey Tambe",
        Position: "Director",
        Company: "Softech Data Security",
        bio: "Dr. Jane Smith is a leading AI researcher with over 10 years",
        photo: "/speakers/jane_smith.jpg",
      },
      status: "completed",
    },
  ];

  const [selectedYear, setSelectedYear] = useState<string>("All");
  const [selectedMonth, setSelectedMonth] = useState<string>("All");

  const years = Array.from(
    new Set(eventData.map((event) => event.eventYear))
  ).sort();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const filteredEvents = eventData.filter((event) => {
    const yearMatch =
      selectedYear === "All" || event.eventYear === selectedYear;
    const monthMatch =
      selectedMonth === "All" || event.eventMonth === selectedMonth;
    return yearMatch && monthMatch;
  });

  const CustomDropdown = ({
    options,
    value,
    onChange,
    placeholder,
  }: {
    options: string[];
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
  }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="relative w-44">
        <motion.button
          className="px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white w-full text-left shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300 font-medium"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {value === "All" ? placeholder : value}
          <span className="float-right mt-1">
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </motion.button>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute left-0 mt-2 w-full bg-blue-800 backdrop-blur-md border border-white/20 text-white rounded-2xl shadow-xl z-20 max-h-60 overflow-y-auto scrollbar-white"
          >
            <li
              className="px-6 py-3 hover:bg-white/20 cursor-pointer transition-all duration-200 rounded-t-2xl"
              onClick={() => {
                onChange("All");
                setIsOpen(false);
              }}
            >
              {placeholder}
            </li>
            {options.map((option) => (
              <li
                key={option}
                className="px-6 py-3 hover:bg-white/20 cursor-pointer transition-all duration-200"
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen to-slate-900 text-white relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/30 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-400/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Club Events
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover amazing tech events, workshops, and networking
            opportunities
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <CustomDropdown
            options={years}
            value={selectedYear}
            onChange={setSelectedYear}
            placeholder="All Years"
          />
          <CustomDropdown
            options={months}
            value={selectedMonth}
            onChange={setSelectedMonth}
            placeholder="All Months"
          />
        </motion.div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.eventId}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Glassmorphism Card */}
              <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-500 overflow-hidden">
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      event.status === "upcoming"
                        ? " text-green-200 border border-green-500 bg-green-500"
                        : " text-blue-200 border border-blue-500 bg-blue-500"
                    }`}
                  >
                    {event.status === "upcoming" ? "Upcoming" : "Completed"}
                  </span>
                </div>

                {/* Event Image Placeholder */}
                <Image
                  src={event.posterPhoto}
                  alt={event.eventName}
                  width={400}
                  height={400}
                  className="w-full h-80 object-fit rounded-2xl mb-6"
                />

                {/* Event Title */}
                <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {event.eventName}
                </h2>

                {/* Date and Time */}
                <div className="flex items-center mb-3 text-cyan-300">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="font-medium">
                    {event.eventDate} {event.eventMonth}, {event.eventYear}
                  </span>
                </div>

                {/* Time */}
                <div className="flex items-center mb-3 text-gray-300">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{event.eventTime}</span>
                </div>

                {/* Location */}
                <div className="flex items-center mb-4 text-gray-300">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{event.location}</span>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {event.description}
                </p>

                {/* Speaker Info */}
                <div className="bg-white/5 rounded-2xl p-4 mb-6 border border-white/10">
                  <h4 className="text-white font-semibold mb-2">Speaker</h4>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {event.Speaker.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        {event.Speaker.name}
                      </p>
                      <p className="text-cyan-300 text-sm">
                        {event.Speaker.Position}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {event.Speaker.Company}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-between items-center">
                  <motion.a
                    href={event.instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 text-pink-300 hover:from-pink-500/30 hover:to-purple-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Instagram size={18} />
                    <span>Instagram</span>
                  </motion.a>
                  <motion.a
                    href={event.linkedInLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Events Found */}
        {filteredEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-12 border border-white/10 max-w-md mx-auto">
              <Search className="w-16 h-16 text-gray-400 mb-4 mx-auto" />
              <p className="text-xl text-gray-300 mb-2">No events found</p>
              <p className="text-gray-400">
                Try adjusting your filters to see more events.
              </p>
            </div>
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default EventsPage;
