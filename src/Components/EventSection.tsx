"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import eventData from "../Data/EventData.json"; // Update path as needed

const EventSection = () => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [filteredEvents, setFilteredEvents] = useState(eventData);

  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  useEffect(() => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.toLocaleString("default", { month: "long" });

    setSelectedMonth(currentMonth);
    setSelectedYear(currentYear.toString());
  }, []);

  useEffect(() => {
    const filtered = eventData.filter((event) => {
      const matchesYear = selectedYear
        ? event.eventYear === selectedYear
        : true;
      const matchesMonth = selectedMonth
        ? event.eventMonth === selectedMonth
        : true;

      return matchesYear && matchesMonth;
    });

    setFilteredEvents(filtered);
  }, [selectedYear, selectedMonth]);

  const years = ["2023", "2024", "2025"];
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

  return (
    <motion.div
      ref={sectionRef}
      className="min-h-[200vh] mb-10"
      id="EventSection"
      style={{
        opacity: sectionOpacity,
      }}
    >
      <div className="w-full sticky top-5 md:top-10 flex flex-col items-center text-white px-4 gap-y-5">
        <h1 className="text-4xl font-bold">Events</h1>

        {/* Filters */}
        <div className="flex flex-col items-center gap-4 w-full max-w-6xl">
          {/* Year Scroll */}
          <div className="flex gap-3 overflow-x-auto scrollbar-hide w-full px-2">
            {years.map((year, index) => (
              <button
                key={index}
                className={`whitespace-nowrap text-white font-semibold py-2 px-4 rounded-full border-2 border-blue-800 hover:bg-blue-800 transition-all duration-200 ${
                  selectedYear === year ? "bg-blue-800" : "bg-transparent"
                }`}
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Month Scroll */}
          <div className="flex gap-3 overflow-x-auto scrollbar-hide w-full px-2">
            {months.map((month, index) => (
              <button
                key={index}
                className={`whitespace-nowrap text-white font-semibold py-2 px-4 rounded-full border-2 border-blue-800 hover:bg-blue-800 transition-all duration-200 ${
                  selectedMonth === month ? "bg-blue-800" : "bg-transparent"
                }`}
                onClick={() => setSelectedMonth(month)}
              >
                {month}
              </button>
            ))}
          </div>

          {/* Events Horizontal Scroll */}
          <div className="w-full overflow-x-auto scrollbar-hide px-4">
            <div className="flex gap-6 snap-x snap-mandatory">
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.eventId}
                  className="snap-center min-w-[280px] sm:min-w-[350px] lg:min-w-[400px] bg-white/10 border border-white/20 rounded-xl p-4 shadow-lg backdrop-blur-md transition-transform duration-200 hover:scale-105 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 text-xs font-bold rounded-full ${
                        event.status === "Completed"
                          ? "bg-green-600 text-white"
                          : event.status === "Ongoing"
                          ? "bg-yellow-400 text-black"
                          : "bg-blue-600 text-white"
                      }`}
                    >
                      {event.status}
                    </span>
                  </div>

                  <div className="bg-blue-400 h-40 rounded-lg"></div>

                  <h2 className="text-xl font-bold mt-4 text-white">
                    {event.eventName}
                  </h2>
                  <p className="text-sm text-gray-300">
                    {event.eventDate} {event.eventMonth}, {event.eventYear}
                  </p>
                  <p className="text-sm text-gray-300">{event.eventTime}</p>
                  <p className="text-sm mt-2 text-gray-200">
                    {event.description}
                  </p>

                  {/* Speaker Info */}
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-white">Speaker:</p>
                    <p className="text-sm text-gray-100">
                      {event.Speaker.name}
                    </p>
                    <p className="text-sm text-gray-400">
                      {event.Speaker.Position}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EventSection;
