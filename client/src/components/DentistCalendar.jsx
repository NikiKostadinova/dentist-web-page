// import React from 'react';
// import Fullcalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";

// export default function Calendar() {
//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100 p-4 ">
//        <div className="w-[80vw] h-[80vh] bg-white shadow-lg rounded-lg p-4">

       
//         <Fullcalendar
//         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//         initialView={"dayGridMonth"}
//         headerToolbar={{
//             start: "dayGridMonth,timeGridWeek,timeGridDay",
//             center: "title",
//             end: "today prev,next"
//         }}
//         height="100%"
        
//         />
//     </div>
//     </div>
//   )
// }


import React, { useEffect } from 'react';
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState} from 'react';

export default function DentistCalendar({ width = "80vw", height = "80vh", className = "" }) {
 const [appointments, setAppointments] = useState([]);
 const [hoveredEvent, setHoveredEvent] = useState(null);

 const convertTo24Hour = (time12h) => {
  const [time, modifier] = time12h.split(' ');
  let [hours, minutes] = time.split(':');

  if (modifier === 'PM' && hours !== '12') {
    hours = String(parseInt(hours, 10) + 12);
  }
  if (modifier === 'AM' && hours === '12') {
    hours = '00';
  }

  return `${hours.padStart(2, '0')}:${minutes}`;
};


const fetchAppointments = async (startStr, endStr) => {
  try {
    const res = await fetch(`/api/appointment/appointments/range?start=${startStr}&end=${endStr}`);
    if (res.ok) {
      const data = await res.json();
      setAppointments(data);
    } else {
      console.error("Failed to fetch appointments.");
    }
  } catch (error) {
    console.error("Error fetching appointments:", error);
  }
};

useEffect(() => {
  fetchAppointments();
}, []);

const handleEventClick = (info) => {
  const { name, phone, service } = info.event.extendedProps;
  alert(`Patient: ${name}\nPhone: ${phone}\nService: ${service}`);
};

// Handle hover event (show patient details when hovering over an event)
const handleEventMouseEnter = (info) => {
  const { name, phone, service } = info.event.extendedProps;
  setHoveredEvent({ name, phone, service });
};

// Handle mouse leave (hide patient details)
const handleEventMouseLeave = () => {
  setHoveredEvent(null);
};

const handleDatesSet = (dateInfo) => {
 const startStr = dateInfo.startStr.split("T")[0]; // e.g., 2025-04-28
 const endStr = dateInfo.endStr.split("T")[0];     // e.g., 2025-05-05
 fetchAppointments(startStr, endStr);
};

const events = appointments.map((appt) => {
  const datePart = new Date(appt.date).toISOString().split('T')[0];
  const startTime24h = convertTo24Hour(appt.time);

  const start = `${datePart}T${startTime24h}`;

  const [startHour, startMinute] = startTime24h.split(":").map(Number);
  const endMinutes = startMinute + 30;  // Add 20 minutes to the start minute
  const endHour = startHour + Math.floor(endMinutes / 60);  // Add full hour if minutes exceed 60
  const endMinute = endMinutes % 60;
  
  const end = `${datePart}T${endHour.toString().padStart(2, '0')}:${endMinute.toString().padStart(2, '0')}`;


  return {
    title: `${appt.name} - ${appt.service}`,
    start,
    end,
    extendedProps: {
      name: appt.name,
      phone: appt.phone,
      service: appt.service
    }
  };
});


  return (
    <div className={`bg-white shadow-lg rounded-lg p-4 ${className}`} style={{ width, height }}>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"timeGridWeek"}
        headerToolbar={{
          start: "dayGridMonth,timeGridWeek,timeGridDay",
          center: "title",
          end: "today prev,next",
        }}
        events={events}
        eventClick={handleEventClick}  // Handle click event
        eventMouseEnter={handleEventMouseEnter}  // Handle hover event
        eventMouseLeave={handleEventMouseLeave}  // Handle mouse leave eve
        editable={true}
       
        // dateClick={handleDateClick}


        slotMinTime="08:30:00"
        slotMaxTime="19:30:00"
        height="100%"  // Ensures it adapts to its parent container
        datesSet={handleDatesSet} 
      />
      {hoveredEvent && (
        <div className="hovered-info p-4 bg-gray-100 mt-4 rounded-md">
          <h3>Patient Details</h3>
          <p><strong>Name:</strong> {hoveredEvent.name}</p>
          <p><strong>Phone:</strong> {hoveredEvent.phone}</p>
          <p><strong>Service:</strong> {hoveredEvent.service}</p>
        </div>
      )}
    </div>
  );
}
