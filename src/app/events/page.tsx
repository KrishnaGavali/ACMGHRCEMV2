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
      eventId: "E001",
      eventName: "Tech Talk: AI Revolution",
      eventDate: "21",
      eventMonth: "July",
      eventYear: "2025",
      eventTime: "10:30 AM - 01:30 PM",
      location: "Auditorium A",
      description:
        "An insightful talk on the latest advancements in Artificial Intelligence.",
      instagramLink: "https://instagram.com/techtalk_ai",
      linkedInLink: "https://linkedin.com/company/techtalk_ai",
      posterPhoto: "/events/techtalk_ai.jpg",
      Speaker: {
        name: "Dr. Jane Smith",
        Position: "AI Researcher",
        Company: "Tech Innovations Inc.",
        bio: "Dr. Jane Smith is a leading AI researcher with over 10 years",
        photo: "/speakers/jane_smith.jpg",
      },
      status: "upcoming",
    },
    {
      eventId: "E002",
      eventName: "Blockchain Basics",
      eventDate: "15",
      eventMonth: "April",
      eventYear: "2025",
      eventTime: "02:00 PM - 05:00 PM",
      location: "Conference Room B",
      description: "A beginner's guide to understanding blockchain technology.",
      instagramLink: "https://instagram.com/blockchain_basics",
      linkedInLink: "https://linkedin.com/company/blockchain_basics",
      posterPhoto: "/events/blockchain_basics.jpg",
      Speaker: {
        name: "Mr. John Doe",
        Position: "Blockchain Developer",
        Company: "Crypto Solutions",
        bio: "John Doe is a blockchain expert with a passion for teaching.",
        photo: "/speakers/john_doe.jpg",
      },
      status: "Completed",
    },
    {
      eventId: "E003",
      eventName: "Cybersecurity Essentials",
      eventDate: "10",
      eventMonth: "May",
      eventYear: "2025",
      eventTime: "11:00 AM - 01:00 PM",
      location: "Auditorium C",
      description:
        "Learn the fundamentals of cybersecurity and how to protect your data.",
      instagramLink: "https://instagram.com/cybersecurity_essentials",
      linkedInLink: "https://linkedin.com/company/cybersecurity_essentials",
      posterPhoto: "/events/cybersecurity_essentials.jpg",
      Speaker: {
        name: "Ms. Alice Brown",
        Position: "Cybersecurity Analyst",
        Company: "SecureTech",
        bio: "Alice Brown specializes in network security and data protection.",
        photo: "/speakers/alice_brown.jpg",
      },
      status: "Completed",
    },
    {
      eventId: "E004",
      eventName: "Cloud Computing Workshop",
      eventDate: "18",
      eventMonth: "June",
      eventYear: "2025",
      eventTime: "09:00 AM - 12:00 PM",
      location: "Lab 1",
      description: "Hands-on workshop on cloud computing and its applications.",
      instagramLink: "https://instagram.com/cloud_computing_workshop",
      linkedInLink: "https://linkedin.com/company/cloud_computing_workshop",
      posterPhoto: "/events/cloud_computing_workshop.jpg",
      Speaker: {
        name: "Dr. Emily White",
        Position: "Cloud Architect",
        Company: "Cloudify Inc.",
        bio: "Emily White has extensive experience in cloud infrastructure design.",
        photo: "/speakers/emily_white.jpg",
      },
      status: "Completed",
    },
    {
      eventId: "E005",
      eventName: "IoT Innovations",
      eventDate: "25",
      eventMonth: "April",
      eventYear: "2025",
      eventTime: "03:00 PM - 06:00 PM",
      location: "Auditorium B",
      description:
        "Exploring the latest trends in Internet of Things technology.",
      instagramLink: "https://instagram.com/iot_innovations",
      linkedInLink: "https://linkedin.com/company/iot_innovations",
      posterPhoto: "/events/iot_innovations.jpg",
      Speaker: {
        name: "Mr. Robert Green",
        Position: "IoT Specialist",
        Company: "SmartTech",
        bio: "Robert Green is a pioneer in IoT solutions and smart devices.",
        photo: "/speakers/robert_green.jpg",
      },
      status: "Completed",
    },
    {
      eventId: "E006",
      eventName: "Big Data Analytics",
      eventDate: "12",
      eventMonth: "May",
      eventYear: "2025",
      eventTime: "10:00 AM - 01:00 PM",
      location: "Conference Room A",
      description: "Understanding the power of big data and its applications.",
      instagramLink: "https://instagram.com/big_data_analytics",
      linkedInLink: "https://linkedin.com/company/big_data_analytics",
      posterPhoto: "/events/big_data_analytics.jpg",
      Speaker: {
        name: "Dr. Michael Lee",
        Position: "Data Scientist",
        Company: "Data Insights Co.",
        bio: "Michael Lee is a renowned data scientist with a focus on analytics.",
        photo: "/speakers/michael_lee.jpg",
      },
      status: "Completed",
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
            className="absolute left-0 mt-2 w-full bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl shadow-xl z-20 max-h-60 overflow-y-auto"
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
                        ? " text-green-300 border border-green-500"
                        : " text-blue-300 border border-blue-500"
                    }`}
                  >
                    {event.status === "upcoming" ? "Upcoming" : "Completed"}
                  </span>
                </div>

                {/* Event Image Placeholder */}
                <Image
                  src={"/EventPlaceholder.jpg"}
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
