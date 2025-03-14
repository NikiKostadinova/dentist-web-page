import React from 'react';
import pic1 from '../assets/pic1.jpg'

export default function AboutUs() {
    return (
        <div className='bg-[#f7fafa] text-[#484849] h-screen font-serif py-20' id='about'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
               
                <div className='flex flex-col md:flex-row items-center md:space-x-12 mx-6'>
                    <img src={pic1} alt="AboutUs" className='w-72 h-80 rounded object-cover drop-shadow-lg mb-8 md:mb-0' />
                    <div className='flex-1'>
                    <h3 className='text-4xl font-bold text-center mb-12'>About Us</h3>
                        <p className='text-lg mb-8'>Passionate about creating healthy, beautiful smiles, I provide personalized and comfortable dental care. With expertise in [general/cosmetic/restorative dentistry], I focus on preventive care and patient education to ensure lifelong oral health. My goal is to make every visit a positive experience.

                            Looking forward to helping you achieve your best smile!</p>
                        {/* <div className='space-y-4'>
                                <div className='flex items-center'>
                                    <label htmlFor="htmlandcss" className='w-2/12'>HTML & CSS</label>
                                    <div className='grow bg-gray-500 rounded-full h-2.5'>
                                         <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full gransform transition-transform duration-300 hover:scale-105 w-10/12'></div>
                                    </div>
                                </div>
                            </div> */}
                        <div className='mt-12 flex justify-between text-center'>
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-300'>
                                    5+
                                </h3>
                                <p>Years Experiance</p>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-300'>
                                    100+
                                </h3>
                                <p>Happy Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
