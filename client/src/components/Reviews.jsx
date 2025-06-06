import React from 'react';
import { Rating } from "flowbite-react";


import ProfilePhoto from '../assets/ProfilePhoto.jpg';

const reviews = [
    {
        id: 1,
        image: ProfilePhoto,
        name: "N.Kostadinova",
        comment: "Thank you for taking care for my smile!",
        rating: 5,
    },
    {
        id: 2,
        image: ProfilePhoto,
        name: "S.Radoslavova",
        comment: "The best service that I ever had!",
        rating: 5,
    },
    {
        id: 3,
        image: ProfilePhoto,
        name: "T.Georgieva",
        comment: "Always the best!",
        rating: 5,
    },
]

export default function Reviews() {
    return (
        <div className='bg-[#f7fafa] text-[#484849] md:h-screen py-20 font-serif' id='about'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h3 className='text-4xl font-bold text-center mb-12'>Reviews</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8'>
                    {reviews.map(review => (
                        <div key={review.id} className='bg-gray-600 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 py-6 grid justify-items-center'>
                            <img src={review.image} alt="photo" className='rounded-full mb-4 w-40 h-40 object-cover ' />
                            <h3 className='text-2xl font-bold mb-2 text-green-400'>{review.name}</h3>
                            <p className='text-gray-400 mb-4'>{review.comment}</p>
                            <Rating>
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star filled={false} />
                            </Rating>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
