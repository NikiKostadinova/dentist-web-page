import React from 'react';

import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';


import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// import { FaMoon, FaSun } from 'react-icons/fa';
// import { useSelector, useDispatch } from 'react-redux';
// import { toggleTheme } from '../redux/theme/themeSlice';
// import { signOutSuccess } from '../redux/user/userSlice';
// import { useNavigate } from 'react-router-dom';
import Logo_Dentist from '../assets/Logo_Dentist.png'


export default function Header() {

  // const path = useLocation().pathname;
  const [isVisible, setIsVisible] = useState(false);
  // const dispatch = useDispatch();
  // const { currentUser } = useSelector(state => state.user);
  // const { theme } = useSelector((state) => state.theme);
  // const navigate = useNavigate();
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

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }


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
    // <nav className='bg-transparent bg-[#63918b] bg-opacity-40 text-[#484849] font-serif px-8  '>
    //     <div className='container mx-auto py-2 flex justify-between items-center'>
    //     <div className='flex items-center'>
    //             <img src={Logo_Dentist} alt="Logo" className='h-6 w-6 md:h-8 md:w-auto mr-2' />
    //             <div className='text-xl font-bold hidden md:inline'>Dr. Dimitar Donchev</div>
    //         </div>


    //         <div className='space-x-6 mx-auto ml-64 gap-4 font-bold'>
    //             <a href='#home' className='hover:text-gray-500'>Home</a>
    //             <a href='#about' className='hover:text-gray-500'>About Us</a>
    //             <a href='#services' className='hover:text-gray-500'>Services</a>
    //             <a href='#contact' className='hover:text-gray-500'>Contact Us</a>
    //         </div>
    //     </div>

    // </nav>

    <Navbar className='border-b-2 p-4 flex justify-between items-center'>
      <Link to="/" className='flex self-center whitespace-nowrap text-sm sm:text-xl font-serif dark:text-white'>
        <img src={Logo_Dentist} alt="Logo" className=' h-10 w-auto mr-3' />
        <span className='hidden sm:inline font-extrabold text-2xl self-center text-[#484849] '>Dr. Dimitar Donchev</span>

      </Link>

      {/* <div className='flex gap-1 md:order-2 md:ml-60'> */}



        <Navbar.Toggle />
      {/* </div > */}
      <Navbar.Collapse >
        {/* <Link to='/' className="nav-link">
            <Navbar.Link active={path === '/'} as={'div'} className={`${path === '/' ? 'bg-emerald-500 md:text-emerald-500 ' : 'text-[#484849]  hover:md:text-emerald-500'} py-2 px-4 text-xl rounded-md`}>
              Home
            </Navbar.Link>
          </Link>
          
          <Link to='/about' className="nav-link">
            <Navbar.Link active={path === '/about'}  as={'div'} className={`${path === '/allposts' ? 'bg-emerald-500 md:text-emerald-500 ' : 'text-[#484849]  hover:md:text-emerald-500'} py-2 px-4 text-xl rounded-md`} >
              About Us
            </Navbar.Link>
          </Link>
          <Link to='/services' className="nav-link">
            <Navbar.Link active={path === '/services'} as={'div'} className={`${path === '/forum' ? 'bg-emerald-500 md:text-emerald-500 ' : 'text-[#484849]  hover:md:text-emerald-500'} py-2 px-4 text-xl rounded-md`}>
              Services
            </Navbar.Link>
          </Link>
          <Link to='/review' className="nav-link">
            <Navbar.Link active={path === '/review'} as={'div'} className={`${path === '/contact-us' ? 'bg-emerald-500 md:text-emerald-500 ' : 'text-[#484849]  hover:md:text-emerald-500'} py-2 px-4 text-xl rounded-md`}>
              Reviews
            </Navbar.Link>
          </Link>
          <Link to='/contact' className="nav-link">
            <Navbar.Link active={path === '/contact'} as={'div'} className={`${path === '/contact-us' ? 'bg-emerald-500 md:text-emerald-500 ' : 'text-[#484849]  hover:md:text-emerald-500'} py-2 px-4 text-xl rounded-md`}>
              Contact Us
            </Navbar.Link>
          </Link> */}

        <a className=' md:hover:text-emerald-500 hover:bg-emerald-100 md:hover:bg-transparent text-xl font-serif text-[#484849] ' href="#home" onClick={(e) => handleScroll(e, "home")}>Home</a>
        <a className='md:hover:text-emerald-500 hover:bg-emerald-100 md:hover:bg-transparent  text-xl font-serif text-[#484849]' href="#about-us" onClick={(e) => handleScroll(e, "about-us")}>About Us</a>
        <a className='md:hover:text-emerald-500 hover:bg-emerald-100 md:hover:bg-transparent   text-xl font-serif text-[#484849]' href="#services" onClick={(e) => handleScroll(e, "services")}>Services</a>
        <a className='md:hover:text-emerald-500 hover:bg-emerald-100  md:hover:bg-transparent  text-xl font-serif text-[#484849]' href="#reviews" onClick={(e) => handleScroll(e, "reviews")}>Reviews</a>
        <a className='md:hover:text-emerald-500 hover:bg-emerald-100 md:hover:bg-transparent  text-xl font-serif text-[#484849]' href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a>


      </Navbar.Collapse>
      {isVisible && (

        <Link to='/login'>
          <Button className='bg-gradient-to-r from-teal-600 to-emerald-300 text-white font-serif  rounded-full'>Log In</Button>
        </Link>
      )}

    </Navbar >

  )
}
