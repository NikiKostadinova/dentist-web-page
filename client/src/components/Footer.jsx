import React from 'react';
import Logo_Dentist from '../assets/Logo_Dentist.png'


export default function Footer() {
    return (
        <footer className='bg-transparent bg-[#63918b] bg-opacity-40 text-[#484849] py-8'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
                    <div className='flex-1 mb-4 md:mb-0 flex items-center'>
                        <img src={Logo_Dentist} alt="Logo" className='h-8 md:h-8 w-auto mr-2' />
                        <span className='text-xl font-bold hidden md:inline'>Dr. Dimitar Donchev</span>
                    </div>
                    <div className='flex-1 w-full'>

                    </div>

                </div>
            </div>
        </footer>
    )
}
