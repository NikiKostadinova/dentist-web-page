import React from 'react';
import pic1 from '../assets/pic1.jpg'

export default function Home() {
    return (
        <div className='bg-[#f7fafa] text-[#484849] h-screen justify-center md:items-center content-center text-center py-16'>
            <img src={pic1} alt="DentistPic" className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105' />
            <h1 className='text-4xl font-serif'>Healthy Smiles for the Whole Family</h1>
            <button className='bg-gradient-to-r from-teal-600 to-emerald-300 text-white font-serif hidden md:inline transform transition-transform duration-300 hover:scale-105 mt-4 px-4 py-2 rounded-full'>Book Appointment</button>
            <p className='mt-4 text-lg text-[#484849] font-serif'>or Call +359988819609</p>
        </div>
    )
}
