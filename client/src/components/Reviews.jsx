import React from 'react';

import Photo from '../assets/Photo.png';

const reviews = [
    {
        id: 1,
        image: Photo,
        name: "N.Kostadinova",
        comment: "Thank you for taking care for my smile!",
        rating: 5,
    },
    {
        id: 2,
        image: Photo,
        name: "S.Radoslavova",
        comment: "The best service that I ever had!",
        rating: 5,
    },
    {
        id: 3,
        image: Photo,
        name: "T.Georgieva",
        comment: "Always the best!",
        rating: 5,
    },
]

export default function Reviews() {
    return (
        <div className='bg-[#f7fafa] text-[#484849] h-screen py-20' id='about'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h3 className='text-4xl font-bold text-center mb-12'>Reviews</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8'>
                   {reviews.map(review => (
                    <div key={review.id} className='bg-gray-600 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                        <img src={review.image} alt="photo" className='rounded-full mb-4 w-48 h-48 object-cover'/>
                        <h3 className='text-2xl font-bold mb-2'>{review.name}</h3>
                        <p className='text-gray-400 mb-4'>{review.comment}</p>
                        <h3>{review.rating}</h3>
                    </div>
                   ))}
                </div>
            </div>
        </div>
    )
}
