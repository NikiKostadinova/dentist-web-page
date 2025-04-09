import { Sidebar } from 'flowbite-react'
import React from 'react'

import { useEffect, useState } from "react";
import { HiUser, HiArrowSmRight, HiDocumentText } from 'react-icons/hi';
import { Link, useLocation } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { signOutSuccess } from "../redux/user/userSlice";
import { useSelector } from "react-redux";
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";

export default function DSideBar() {
    const location = useLocation();
    // const dispatch = useDispatch();
    const { currentUser } = useSelector(state => state.user);
    const [tab, setTab] = useState('');
    useEffect(() => {
      const urlParams = new URLSearchParams(location.search);
      const tabFromUrl = urlParams.get('tab');
      if (tabFromUrl) {
        setTab(tabFromUrl);
      }
    },
      [location.search]);
    // const logOut = async () => {
    //   try {
    //     const res = await fetch('/api/user/logout', {
    //       method: 'POST'
    //     });
    //     const data = await res.json();
    //     if (!res.ok) {
    //       console.log(data.message);
    //     } else {
    //       dispatch(signOutSuccess());
    //     }
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // }
    return (
        <Sidebar className='w-full md:w-56 shadow-md'>
            <Sidebar.Items>
                <Sidebar.ItemGroup className='flex flex-col gap-1'>
                    <Link to='/dashboard?tab=calendar'>
                        <Sidebar.Item active={tab === 'calendar'} icon={HiUser} label={currentUser.isAdmin ? 'Admin' : 'User'} labelColor='dark' as="div">Calendar</Sidebar.Item>
                    </Link>
                </Sidebar.ItemGroup>
            </Sidebar.Items>

        </Sidebar>
    )
}
