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


import React from 'react';
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function DentistCalendar({ width = "80vw", height = "80vh", className = "" }) {
  return (
    <div className={`bg-white shadow-lg rounded-lg p-4 ${className}`} style={{ width, height }}>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "dayGridMonth,timeGridWeek,timeGridDay",
          center: "title",
          end: "today prev,next",
        }}
        // events={events}
        // dateClick={handleDateClick}
        editable={true}

        slotMinTime="08:30:00"
        slotMaxTime="19:30:00"
        height="100%"  // Ensures it adapts to its parent container
      />
    </div>
  );
}
