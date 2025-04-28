import React, { useState, useEffect } from "react";

export default function BookingCalendar({ selectedDate, setSelectedDate, setSelectedTime }) {
  const [appointments, setAppointments] = useState([]);
  const [currentWeek, setCurrentWeek] = useState(getCurrentWeek());

   
  useEffect(() => {
    if (!selectedDate) return;
    
    if(!appointments.length === 0) return;
  
    const fetchAppointments = async () => {
      try {
        // Format the selected date to string in YYYY-MM-DD format (if it's not already)
        const formattedDate = new Date(selectedDate).toISOString().split('T')[0];
  
        // Try fetching appointments for the selected date
        const res = await fetch(`/api/appointments/date?date=${selectedDate}`);

  
        if (res.ok) {
          const data = await res.json();
          
          // Log the response data to check what we get from the server
          console.log("Appointments fetched:", data);
  
          // If appointments are found, store them; otherwise, store an empty array
          setAppointments(Array.isArray(data) ? data : []);
        } else {
          // If response is not ok, log it and set appointments to empty array
          console.error("Failed to fetch appointments for date:", formattedDate);
          setAppointments([]);
        }
      } catch (error) {
        // Catch errors such as network issues
        console.error("Error fetching appointments:", error);
        setAppointments([]);
      }
    };
  
    // Call fetchAppointments function
    fetchAppointments();
  }, [selectedDate]); // Re-run whenever selectedDate changes
  

  const timeSlots = [
    "9:00 AM", "9:20 AM", "9:40 AM", "10:00 AM", "10:20 AM", "10:40 AM", "11:00 AM", "11:20 AM", "11:40 AM", "12:00 PM",
    "12:20 PM", "12:40 PM", "1:00 PM", "1:20 PM", "1:40 PM", "2:00 PM", "2:20 PM", "2:40 PM", "3:00 PM", "3:20 PM", "3:40 PM", "4:00 PM", "4:20 PM", "4:40 PM", "5:00 PM", "5:20 PM", "5:40 PM", "6:00 PM",
  ];

  function getCurrentWeek(startDate = new Date()) {
    const today = new Date(startDate);
    const start = new Date(today.setDate(today.getDate() - today.getDay() + 1));
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      return d.toISOString().split("T")[0];
    }).filter(date => {
      const day = new Date(date).getDay();
      return day !== 0 && day !== 6;
    });
  }

  // const handleBooking = async (time) => {
  //   const appointment = {
  //     ...formData,
  //     date: selectedDate,
  //     time,
  //   };

  //   try {
  //     const response = await fetch("/api/appointments/add", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(appointment),
  //     });

  //     if (response.ok) {
  //       alert(`Booking confirmed for ${selectedDate} at ${time}`);
  //       setAppointments([...appointments, { date: selectedDate, time }]);
  //       // setSelectedTime(time);
  //     } else {
  //       alert("Failed to book appointment. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error("Error booking appointment:", error);
  //     alert("An error occurred. Please try again later.");
  //   }
  // };

  const navigateWeek = (direction) => {
    const newStartDate = new Date(currentWeek[0]);
    newStartDate.setDate(newStartDate.getDate() + direction * 7);
    const newWeek = getCurrentWeek(newStartDate);
    setCurrentWeek(newWeek);
    setSelectedDate(newWeek[0]);
  };

  const isPastDate = (date) => {
    const today = new Date();
    const selected = new Date(date);
    return selected < today && !isToday(date);
  };

  const isToday = (date) => {
    const today = new Date();
    const selected = new Date(date);
    return today.toDateString() === selected.toDateString();
  };

  return (
    <div className="p-5 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Book an Appointment</h2>

      <div className="flex justify-between mb-4">
        <button onClick={() => navigateWeek(-1)} className="px-4 py-2 bg-blue-500 text-white rounded-md">Предишна седмица</button>
        <button onClick={() => navigateWeek(1)} className="px-4 py-2 bg-blue-500 text-white rounded-md">Следваща седмица</button>
      </div>

      <div className="flex justify-center gap-2 mb-4">
        {currentWeek.map((date) => (
          <button
            key={date}
            className={`px-3 py-1 rounded-md text-sm ${
              selectedDate === date ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setSelectedDate(date)}
            disabled={isPastDate(date)} // Disable past dates
          >
            {new Date(date).toLocaleDateString("bg-BG", { weekday: "short", month: "short", day: "numeric" })}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-5 gap-3">
        {timeSlots.map((time) => {
          const isBooked = appointments.some(appt => appt.date === selectedDate && appt.time === time);
          const isDisabled = isPastDate(selectedDate) || isBooked;

          return (
            <button
              key={time}
              className={`p-2 text-sm rounded-md ${
                isDisabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-green-500 text-white hover:bg-green-600"
              }`}
              disabled={isDisabled}
              onClick={() => {
                if (!isDisabled) {
                  setSelectedTime(time); // <-- just update the selected time
                }
              }}
            >
              {time}
            </button>
          );
        })}
      </div>
    </div>
  );
}
