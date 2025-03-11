import React from 'react';
import pic1 from '../assets/pic1.jpg'

export default function AboutUs() {
    return (
        <div className='bg-black text-white py-20' id='about'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h3 className='text-4xl font-bold text-center mb-12'>About Us</h3>
                <div>
                    <img src={pic1} alt="AboutUs" />
                    <p>Passionate about creating healthy, beautiful smiles, I provide personalized and comfortable dental care. With expertise in [general/cosmetic/restorative dentistry], I focus on preventive care and patient education to ensure lifelong oral health. My goal is to make every visit a positive experience.

                        Looking forward to helping you achieve your best smile!</p>
                </div>
            </div>
        </div>
    )
}
