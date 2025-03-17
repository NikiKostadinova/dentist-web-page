import React from 'react';
import Logo_Dentist from '../assets/Logo_Dentist.png'


export default function Navbar() {
    return (
        <nav className='bg-transparent bg-[#63918b] bg-opacity-40 text-[#484849] font-serif px-8  '>
            <div className='container mx-auto py-2 flex justify-between items-center'>
            <div className='flex items-center'>
                    <img src={Logo_Dentist} alt="Logo" className='h-6 w-6 md:h-8 md:w-auto mr-2' />
                    <div className='text-xl font-bold hidden md:inline'>Dr. Dimitar Donchev</div>
                </div>

                
                <div className='space-x-6 mx-auto ml-64 gap-4 font-bold'>
                    <a href='#home' className='hover:text-gray-500'>Home</a>
                    <a href='#about' className='hover:text-gray-500'>About Us</a>
                    <a href='#services' className='hover:text-gray-500'>Services</a>
                    <a href='#contact' className='hover:text-gray-500'>Contact Us</a>
                </div>
            </div>
            
        </nav>
    )
}
