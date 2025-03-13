import React from 'react';
import Logo_Dentist from '../assets/Logo_Dentist.png'


export default function Navbar() {
    return (
        <nav className='bg-transparent bg-[#63918b] bg-opacity-40 text-[#484849] px-8  '>
            <div className='container mx-auto py-2 flex justify-between items-center'>
            <div className='flex items-center'>
                    <img src={Logo_Dentist} alt="Logo" className='h-8 md:h-8 w-auto mr-2' />
                    <div className='text-xl font-bold hidden md:inline'>Dr. Dimitar Donchev</div>
                </div>

                
                <div className='space-x-6 mx-auto ml-64 gap-4'>
                    <a href='#home' className='hover:text-gray-400'>Home</a>
                    <a href='#about' className='hover:text-gray-400'>About Us</a>
                    <a href='#services' className='hover:text-gray-400'>Services</a>
                    <a href='#contact' className='hover:text-gray-400'>Contact Us</a>
                </div>
            </div>
            
        </nav>
    )
}
