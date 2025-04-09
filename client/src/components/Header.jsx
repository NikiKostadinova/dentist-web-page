import React from 'react';

import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';


import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';


import Logo_Dentist from '../assets/Logo_Dentist.png'


export default function Header() {
  const location = useLocation(); 

  const [isVisible, setIsVisible] = useState(false);


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
  //       navigate('/login');
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  // const handleScroll = (e, sectionId) => {
  //   e.preventDefault();
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // }

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      // If not on the home page, navigate there first
      window.location.href = `/#${sectionId}`;
    } else {
      // Scroll smoothly within the same page
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };


  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.shiftKey && event.code === 'KeyA') {
        setIsVisible(true);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [setIsVisible]);
  return (


    <Navbar className='border-b-2 p-4 flex justify-between items-center'>
      <Link to="/" className='flex self-center whitespace-nowrap text-sm sm:text-xl font-serif dark:text-white'>
        <img src={Logo_Dentist} alt="Logo" className=' h-10 w-auto mr-3' />
        <span className='hidden sm:inline font-extrabold text-2xl self-center text-[#484849] '>Dr. Dimitar Donchev</span>

      </Link>



      <Navbar.Toggle />

      <Navbar.Collapse >


        {/* <a className=' md:hover:text-emerald-500 hover:bg-emerald-100 md:hover:bg-transparent text-xl font-serif text-[#484849] ' href="#home" onClick={(e) => handleScroll(e, "home")}>Home</a>
        <a className='md:hover:text-emerald-500 hover:bg-emerald-100 md:hover:bg-transparent  text-xl font-serif text-[#484849]' href="#about-us" onClick={(e) => handleScroll(e, "about-us")}>About Us</a>
        <a className='md:hover:text-emerald-500 hover:bg-emerald-100 md:hover:bg-transparent   text-xl font-serif text-[#484849]' href="#services" onClick={(e) => handleScroll(e, "services")}>Services</a>
        <a className='md:hover:text-emerald-500 hover:bg-emerald-100  md:hover:bg-transparent  text-xl font-serif text-[#484849]' href="#reviews" onClick={(e) => handleScroll(e, "reviews")}>Reviews</a>
        <a className='md:hover:text-emerald-500 hover:bg-emerald-100 md:hover:bg-transparent  text-xl font-serif text-[#484849]' href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a> */}


        <Link to="/" onClick={(e) => handleScroll(e, "home")} className="md:hover:text-emerald-500 hover:bg-emerald-100 md:hover:bg-transparent text-xl font-serif text-[#484849]">
          Home
        </Link>
        <Link to="/" onClick={(e) => handleScroll(e, "about-us")} className="md:hover:text-emerald-500 hover:bg-emerald-100 md:hover:bg-transparent text-xl font-serif text-[#484849]">
          About Us
        </Link>
        <Link to="/" onClick={(e) => handleScroll(e, "services")} className="md:hover:text-emerald-500 hover:bg-emerald-100 md:hover:bg-transparent text-xl font-serif text-[#484849]">
          Services
        </Link>
        <Link to="/" onClick={(e) => handleScroll(e, "reviews")} className="md:hover:text-emerald-500 hover:bg-emerald-100 md:hover:bg-transparent text-xl font-serif text-[#484849]">
          Reviews
        </Link>
        <Link to="/" onClick={(e) => handleScroll(e, "contact")} className="md:hover:text-emerald-500 hover:bg-emerald-100 md:hover:bg-transparent text-xl font-serif text-[#484849]">
          Contact
        </Link>



      </Navbar.Collapse>
      {isVisible && (

        <Link to='/login'>
          <Button className='bg-gradient-to-r from-teal-600 to-emerald-300 text-white font-serif  rounded-full'>Log In</Button>
        </Link>
      )}

    </Navbar >

  )
}
