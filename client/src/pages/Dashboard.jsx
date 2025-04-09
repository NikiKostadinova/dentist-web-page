// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import DSidebar from '../components/DSidebar'
// import Profile from "../components/Profile";

// import DashComponent from "../components/DashComponent";
// import AllDiscussions from "../components/AllDiscussions";

// import AllPostsDisplay from "../components/AllPostsDisplay";


// export default function Dashboard() {
//   const location = useLocation();
//   const [tab, setTab] = useState('');
//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     const tabFromUrl = urlParams.get('tab');
//     if (tabFromUrl) {
//       setTab(tabFromUrl);
//     }
//   },
//     [location.search]);
//   return (
//     <div className="min-h-screen flex flex-col md:flex-row">
//       <div className="md:w-56">

//         <DSidebar />
//       </div>

//       {tab === 'profile' && <Profile />}

//       {tab === 'posts' && <AllPostsDisplay />}

//       {tab === 'discussions' && <AllDiscussions />}

//       {tab === 'dash' && <DashComponent />}
//     </div>
//   )
// }


import React from 'react';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DentistCalendar from '../components/DentistCalendar'
import DSideBar from '../components/DSideBar'

export default function Dashboard() {
    const location = useLocation();
    const [tab, setTab] = useState('');
    useEffect(() => {
      const urlParams = new URLSearchParams(location.search);
      const tabFromUrl = urlParams.get('tab');
      if (tabFromUrl) {
        setTab(tabFromUrl);
      }
    },
      [location.search]);

    return (
        <div className='min-h-screen flex flex-col md:flex-row'>
            <div className='md:w-56'>
                <DSideBar />
            </div>
            
               
                {tab === 'calendar' && <DentistCalendar width="80vw" height="80vh" />}
            
        </div>
    )
}
