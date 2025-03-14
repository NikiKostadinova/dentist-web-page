import React from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

export default function Contact() {
    return (
        <div className='bg-[#f7fafa] text-[#484849] h-screen py-20 font-serif' id='about'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h3 className='text-4xl font-bold text-center mb-12'>Contact Us</h3>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>

                    <div className='flex-1'>
                        <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Let's Talk</h3>
                        <p>You can contact us on the adress bellow!
                            Or send Us a message!
                        </p>
                        <div className='mb-4 mt-8'>
                            <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                            <a href="mailto:niki_radost@yahoo.com" className='hover:underline'>niki_radost@yahoo.com</a>
                        </div>
                        <div className='mb-4'>
                            <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                            <span>+359988819609</span>
                        </div>
                        <div className='mb-4'>
                            <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                            <span>Burgas, Vazrajdane</span>
                        </div>
                    </div>
                    <div className='flex-1 w-full'>
                        <form className='space-y-4'>
                            <div>
                                <label htmlFor="name" className='block mb-2'>Your Name</label>
                                <input type="text" className='w-full p-2 rounded bg-transparent bg-[#63918b] bg-opacity-40 text-[#484849] border border-gray-600 focus:outline-none focus:border-green-400' placeholder='Enter Your Name' />
                            </div>
                            <div>
                                <label htmlFor="email" className='block mb-2'>Email</label>
                                <input type="text" className='w-full p-2 rounded bg-transparent bg-[#63918b] bg-opacity-40 text-[#484849] border border-gray-600 focus:outline-none focus:border-green-400' placeholder='Enter Your Email' />
                            </div>
                            <div>
                                <label htmlFor="message" className='block mb-2'>Message</label>
                                <textarea type="text" className='w-full p-2 rounded bg-transparent bg-[#63918b] bg-opacity-40 text-[#484849] border border-gray-600 focus:outline-none focus:border-green-400' rows="5" placeholder='Enter Your Message' />
                            </div>
                            <button className='bg-gradient-to-r from-green-400 to-cyan-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
