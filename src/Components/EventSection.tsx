"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import eventData from "../Data/EventData.json";

const EventSection = () => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [filteredEvents, setFilteredEvents] = useState(eventData);

  const sectionRef = useRef<HTMLDivElement>(null);

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
      id="EventSection"
      className=" py-20 text-white"
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-blue-400">
          Events Timeline
        </h1>
      </div>

      {/* Filters */}
      <div className="flex flex-col items-center gap-6 max-w-7xl mx-auto px-4">
        {/* Year Filter */}
        <div className="flex gap-3 flex-wrap justify-center md:justify-start">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-xl text-sm md:text-base font-semibold border transition-all duration-200 ${
                selectedYear === year
                  ? "bg-blue-400 text-black shadow-lg"
                  : "bg-white/5 text-white border-blue-400/40 hover:bg-blue-400 hover:text-black"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Month Filter (Now horizontally scrollable on small screens) */}
        <div className="w-full md:w-auto overflow-x-auto scrollbar-hide md:overflow-visible">
          <div className="flex gap-3 px-2 md:justify-center w-max">
            {months.map((month) => (
              <button
                key={month}
                onClick={() => setSelectedMonth(month)}
                className={`px-4 py-2 rounded-xl text-sm md:text-base font-semibold transition-all border duration-200 ${
                  selectedMonth === month
                    ? "bg-blue-400 text-black shadow-lg"
                    : "bg-white/5 text-white border-blue-400/40 hover:bg-blue-400 hover:text-black"
                }`}
              >
                {month}
              </button>
            ))}
          </div>
        </div>

        {/* Events List */}
        <div className="w-full overflow-x-auto scrollbar-hide overflow-y-auto">
          <div className="flex gap-6 px-4 pb-6 snap-x snap-mandatory">
            {filteredEvents.map((event) => (
              <motion.div
                key={event.eventId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="snap-center min-w-[300px] md:min-w-[360px] lg:min-w-[400px] bg-white/5 border border-blue-400/50 rounded-3xl p-6 hover:shadow-[0px_0px_0px_1px_#51a2ff] transition-all relative"
              >
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span
                    className={`px-3 py-1 text-xs font-bold rounded-full ${
                      event.status === "Completed"
                        ? "bg-green-500 text-black"
                        : event.status === "Ongoing"
                        ? "bg-yellow-400 text-black"
                        : "bg-blue-400 text-black"
                    }`}
                  >
                    {event.status}
                  </span>
                </div>

                {/* Banner */}
                <div className="bg-blue-400 rounded-xl h-40 mb-4 w-full shadow-inner"></div>

                {/* Event Info */}
                <h2 className="text-white text-xl font-bold mb-1">
                  {event.eventName}
                </h2>
                <p className="text-gray-300 text-sm">
                  📅 {event.eventDate} {event.eventMonth}, {event.eventYear}
                </p>
                <p className="text-gray-400 text-sm mb-3">
                  🕒 {event.eventTime}
                </p>
                <p className="text-gray-200 text-sm italic mb-4">
                  {event.description}
                </p>

                {/* Speaker */}
                <div className="mt-2">
                  <p className="text-sm font-semibold text-blue-400">
                    🎙 Speaker:
                  </p>
                  <p className="text-sm text-white">{event.Speaker.name}</p>
                  <p className="text-xs text-gray-400">
                    {event.Speaker.Position}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EventSection;
