import React from 'react';

import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';


import { Link, useLocation } from 'react-router-dom';

// import { FaMoon, FaSun } from 'react-icons/fa';
// import { useSelector, useDispatch } from 'react-redux';
// import { toggleTheme } from '../redux/theme/themeSlice';
// import { signOutSuccess } from '../redux/user/userSlice';
// import { useNavigate } from 'react-router-dom';
import Logo_Dentist from '../assets/Logo_Dentist.png'


export default function Header() {

    const path = useLocation().pathname;
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
  
        <div className='flex gap-1 md:order-2 md:ml-60'>
         
          
  
          <Navbar.Toggle />
        </div >
        <Navbar.Collapse>
          <Link to='/' className="nav-link">
            <Navbar.Link active={path === '/'} as={'div'} className={`${path === '/' ? 'bg-emerald-500 md:text-emerald-500 ' : 'text-[#484849]  hover:md:text-emerald-500'} py-2 px-4 text-xl rounded-md`}>
              Home
            </Navbar.Link>
          </Link>
          
          <Link to='/allposts' className="nav-link">
            <Navbar.Link active={path === '/allposts'}  as={'div'} className={`${path === '/allposts' ? 'bg-emerald-500 md:text-emerald-500 ' : 'text-[#484849]  hover:md:text-emerald-500'} py-2 px-4 text-xl rounded-md`} >
              About Us
            </Navbar.Link>
          </Link>
          <Link to='/forum' className="nav-link">
            <Navbar.Link active={path === '/forum'} as={'div'} className={`${path === '/forum' ? 'bg-emerald-500 md:text-emerald-500 ' : 'text-[#484849]  hover:md:text-emerald-500'} py-2 px-4 text-xl rounded-md`}>
              Services
            </Navbar.Link>
          </Link>
          <Link to='/contact-us' className="nav-link">
            <Navbar.Link active={path === '/contact-us'} as={'div'} className={`${path === '/contact-us' ? 'bg-emerald-500 md:text-emerald-500 ' : 'text-[#484849]  hover:md:text-emerald-500'} py-2 px-4 text-xl rounded-md`}>
              Reviews
            </Navbar.Link>
          </Link>
          <Link to='/contact-us' className="nav-link">
            <Navbar.Link active={path === '/contact-us'} as={'div'} className={`${path === '/contact-us' ? 'bg-emerald-500 md:text-emerald-500 ' : 'text-[#484849]  hover:md:text-emerald-500'} py-2 px-4 text-xl rounded-md`}>
              Contact Us
            </Navbar.Link>
          </Link>
        </Navbar.Collapse>
      </Navbar >

    )
}
