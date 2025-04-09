
// const timeSlots = [
//     "9:00 AM", "9:20 AM", "9:40 AM", "10:00 AM", "10:20 AM", "10:40 AM", "11:00 AM", "11:20 AM", "11:40 AM", "12:00 PM",
//     "12:20 PM", "12:40 PM", "1:00 PM", "1:20 PM", "1:40 PM", "2:00 PM", "2:20 PM", "2:40 PM", "3:00 PM", "3:20 PM", "3:40 PM", "4:00 PM", "4:20 PM", "4:40 PM", "5:00 PM", "5:20 PM", "5:40 PM", "6:00 PM",
//   ];


import React from 'react';

import { useState, useEffect } from "react";

export default function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState(getTodayDate()); // Default to the first day of the current week
  const [appointments, setAppointments] = useState([]);
  const [currentWeek, setCurrentWeek] = useState(getCurrentWeek()); // Store the current week

  useEffect(() => {
    // Simulate fetching booked appointments from the database
    setAppointments(mockAppointments);
  }, [selectedDate]); // Re-fetch when the selected date changes

  const timeSlots = [
    "9:00 AM", "9:20 AM", "9:40 AM", "10:00 AM", "10:20 AM", "10:40 AM", "11:00 AM", "11:20 AM", "11:40 AM", "12:00 PM",
        "12:20 PM", "12:40 PM", "1:00 PM", "1:20 PM", "1:40 PM", "2:00 PM", "2:20 PM", "2:40 PM", "3:00 PM", "3:20 PM", "3:40 PM", "4:00 PM", "4:20 PM", "4:40 PM", "5:00 PM", "5:20 PM", "5:40 PM", "6:00 PM",
  ];

  // Get the current week, starting on Monday
  function getCurrentWeek(startDate = new Date()) {
    const today = new Date(startDate);
    const start = new Date(today.setDate(today.getDate() - today.getDay() + 1)); // Get Monday of the week
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      return d.toISOString().split("T")[0]; // Format: YYYY-MM-DD
    }).filter((date) => {
      const day = new Date(date).getDay();
      return day !== 0 && day !== 6; // Filter out Saturday (6) and Sunday (0)
    });
  }

  const handleBooking = (time) => {
    alert(`Booking confirmed for ${selectedDate} at ${time}`);
    // Here, you would send data to the database
  };

  const navigateWeek = (direction) => {
    const newStartDate = new Date(currentWeek[0]);
    newStartDate.setDate(newStartDate.getDate() + direction * 7); // Move by 7 days for next/previous week
    setCurrentWeek(getCurrentWeek(newStartDate)); // Update current week based on the direction
    setSelectedDate(getCurrentWeek(newStartDate)[0]); // Reset the selected date to the first day of the new week
  };

  const isPastDate = (date) => {
    const today = new Date();
    const selectedDateObj = new Date(date);
    // If the selected date is before today's date, it's a past date
    return selectedDateObj < today && !isToday(date);
  };

  function getTodayDate() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }

  const isToday = (date) => {
    const today = new Date();
    const selectedDateObj = new Date(date);
    return (
      today.getDate() === selectedDateObj.getDate() &&
      today.getMonth() === selectedDateObj.getMonth() &&
      today.getFullYear() === selectedDateObj.getFullYear()
    );
  };

  return (
    <div className="p-5 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Book an Appointment</h2>

      {/* Week Navigation */}
      <div className="flex justify-between mb-4">
        <button
          onClick={() => navigateWeek(-1)} // Previous Week
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Предишна седмица
        </button>
        <button
          onClick={() => navigateWeek(1)} // Next Week
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Следваща седмица
        </button>
      </div>

      {/* Date Selector */}
      <div className="flex justify-center gap-2 mb-4">
        {currentWeek.map((date) => (
          <button
            key={date}
            className={`px-3 py-1 rounded-md text-sm ${
              selectedDate === date ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setSelectedDate(date)}
            // disabled={isPastDate(date)} // Disable past dates
          >
            {new Date(date).toLocaleDateString("bg-BG", { weekday: "short", month: "short", day: "numeric" })}
          </button>
        ))}
      </div>

      {/* Time Slots */}
      <div className="grid grid-cols-5 gap-3">
        {timeSlots.map((time) => {
          const isBooked = appointments.some((appt) => appt.date === selectedDate && appt.time === time);
          const isDisabled = isPastDate(selectedDate) || isBooked; // Disable all slots if the date is in the past
          

          return (
            <button
              key={time}
              className={`p-2 text-sm rounded-md ${
                isDisabled
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-green-500 text-white hover:bg-green-600"
              }`}
              disabled={isDisabled}
              onClick={() => !isDisabled && handleBooking(time)}
            >
              {time}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Mock Appointments (Replace with database fetching in the future)
const mockAppointments = [
  { date: "2025-04-03", time: "10:00 AM" }, // Example booked slots
  { date: "2025-04-04", time: "2:00 PM" },
];
