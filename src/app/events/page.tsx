"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/Components/Footer";
import eventData from "@/Data/EventData.json";

const EventsPage = () => {
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
      <div className="relative w-40">
        <button
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-400 to-cyan-300 text-white w-full text-left shadow-md hover:shadow-lg transition-shadow"
          onClick={() => setIsOpen(!isOpen)}
        >
          {value === "All" ? placeholder : value}
        </button>
        {isOpen && (
          <ul className="absolute left-0 mt-2 w-full bg-blue-400 text-white rounded-lg backdrop-blur-md shadow-lg z-10 max-h-60 overflow-y-auto">
            <li
              className="px-4 py-2 hover:bg-white/20 cursor-pointer"
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
                className="px-4 py-2 hover:bg-white/20 cursor-pointer"
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <div className=" bg-gradient-to-b from-black via-slate-900 to-black text-white">
      {/* Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-20 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-cyan-400/20 blur-3xl rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 relative z-10">
        <h1 className="text-4xl font-extrabold text-center mb-8">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Club Events
          </span>
        </h1>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
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
        </div>

        {/* Event Cards */}
        <div className="overflow-x-auto lg:overflow-visible">
          <div className="flex lg:grid lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <motion.div
                key={event.eventId}
                className="min-w-[300px] lg:min-w-0 p-6 rounded-lg bg-gradient-to-b from-slate-800 to-slate-900 shadow-lg hover:shadow-xl transition-shadow backdrop-blur-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={"/EventPlaceholder.jpg"}
                  alt={event.eventName}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-bold mb-2 text-white">
                  {event.eventName}
                </h2>
                <p className="text-sm text-gray-300 mb-2">
                  {event.eventDate} {event.eventMonth}, {event.eventYear}
                </p>
                <p className="text-sm text-gray-300 mb-4">{event.location}</p>
                <p className="text-sm text-gray-400 mb-4">
                  {event.description}
                </p>
                <div className="flex justify-between items-center">
                  <a
                    href={event.instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Instagram
                  </a>
                  <a
                    href={event.linkedInLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    LinkedIn
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* No Events Found */}
        {filteredEvents.length === 0 && (
          <p className="text-center text-gray-400 mt-8">
            No events found for the selected filters.
          </p>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EventsPage;
