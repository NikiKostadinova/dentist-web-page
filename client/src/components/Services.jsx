import React from 'react';

const services = [
    {
        id: 1,
        title: "Teeth Whitening",
        description: "Brighten your smile with our professional teeth whitening treatments. Say goodbye to stains and discoloration for a dazzling, confident smile!"
    },
    {
        id: 2,
        title: "Dental Implants",
        description: "Our high-quality dental implants restore your smile, giving you a natural look and feel with long-lasting results."
    },
    {
        id: 3,
        title: "Cosmetic Dentistry",
        description: "Transform your smile with veneers, bonding, and reshaping. We help you achieve the perfect smile you've always dreamed of!"
    },
    {
        id: 4,
        title: "Preventive Care & Checkups",
        description: "Keep your teeth and gums healthy with regular checkups and cleanings. Prevention is the key to a lifelong, beautiful smile."
    },
    {
        id: 5,
        title: "Orthodontics",
        description: "Straighten your teeth comfortably with clear aligners. A perfect smile without the hassle of traditional braces!"
    },
    {
        id: 6,
        title: "Children's Dentistry",
        description: "Fun and friendly dental care for little smiles! We make kids feel comfortable while keeping their teeth healthy."
    },
]

export default function Services() {
    return (
        <div className='bg-[#f7fafa] text-[#484849] h-screen py-20' id='about'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h3 className='text-4xl font-bold text-center mb-12'>Services</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {services.map(service => (
                        <div key={service.id} className='bg-gray-600 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                            <div className='text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400'>
                                {service.id}
                            </div>
                            <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>{service.title}</h3>
                            <p className='mt-2 text-gray-300'>{service.description}</p>
                            <a href="#" className='mt-4 inline-block text-green-400 hover:text-blue-500'>Read More</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
