import React from 'react';

import { Alert, Button, Select, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";

import { useNavigate } from 'react-router-dom';

import BookingCalendar from '../components/BookingCalendar';


export default function AddAppointment() {
    const [formData, setFormData] = useState({});
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [errorPublishing, setErrorPublishing] = useState(null);
    const navigate = useNavigate();


    const submitNewPost = async (e) => {
        e.preventDefault();

        if (!selectedDate || !selectedTime) {
            setErrorPublishing("Please select a date and time.");
            return;
          }
          const appointment = {
            ...formData,
            service: formData.category || 'uncategorized',
            date: selectedDate,
            time: selectedTime,
          };
        try {
            const res = await fetch('api/appointment/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(appointment)
            });
            const data = await res.json();
            if (!res.ok) {
                setErrorPublishing(data.message || "Failed to book appointment");
                return;
            }

            setErrorPublishing(null);
            alert(`Appointment booked for ${selectedDate} at ${selectedTime}`);
            navigate('/');
        } catch (error) {
            console.log(error);
            setErrorPublishing('Something went wrong!')
        }
    }
    return (
        
        // <div className="p-5 max-w-6xl mx-auto h-screen">
        //     <h1 className="text-center text-3xl my-5 font-semibold">Add Appointment</h1>

        //     {/* Flex container for form and calendar */}
        //     <div className="flex flex-col md:flex-row justify-between gap-10">
        //         {/* Form Section */}
        //         <div className="w-full md:w-1/2 bg-white p-6 shadow-md rounded-lg">
        //             <form className="flex flex-col gap-4" onSubmit={submitNewPost}>
        //                 <TextInput
        //                     type="text"
        //                     placeholder="Name"
        //                     required
        //                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        //                 />
        //                 <TextInput
        //                     type="email"
        //                     placeholder="Email"
        //                     required
        //                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        //                 />
        //                 <TextInput
        //                     type="tel"
        //                     placeholder="Phone"
        //                     required
        //                     onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        //                 />
        //                 <TextInput
        //                     type="number"
        //                     placeholder="Age"
        //                     required
        //                     onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        //                 />

        //                 <Select
        //                     onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        //                 >
        //                     <option value="uncategorized">Service</option>
        // //                 <option value="Dental Checkup">Dental Checkup</option>
        // //                 <option value="Teeth Cleaning - Prophylaxis">Teeth Cleaning - Prophylaxis</option>
        // //                 <option value="Theeth Whitening">Theeth Whitening</option>
        // //                 <option value="Other Cosmetic Dentistry">Other Cosmetic Dentistry</option>
        // //                 <option value="Restorative Dentistry">Restorative Dentistry</option>
        // //                 <option value="Orthodontics Consultation">Orthodontics Consultation</option>
        // //                 <option value="Orthodontics">Orthodontics</option>
        // //                 <option value="Pediatric Dentistry">Pediatric Dentistry</option>
        // //                 <option value="Oral Surgery">Oral Surgery</option>
        // //                 <option value="Gum Care">Gum Care</option>
        // //                 <option value="Toothache Relief">Toothache Relief</option>
        // //                 <option value="Broken or Chipped Tooth Repair">Broken or Chipped Tooth Repair</option>
        // //                 <option value="Knocked-Out Tooth Treatment">Knocked-Out Tooth Treatment</option>
        //                 </Select>

        //                 <Textarea
        //                     placeholder="Comment..."
        //                     required
        //                     className="border-gray-300 rounded-lg p-4 h-32 mb-4"
        //                     onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
        //                 />
        //             </form>
        //         </div>

        //         {/* Calendar Section */}
        //         <div className="w-full md:w-1/2 h-[70vh] bg-white shadow-lg rounded-lg p-4">
        //   <BookingCalendar
        //     selectedDate={selectedDate}
        //     setSelectedDate={setSelectedDate}
        //     selectedTime={selectedTime}
        //     setSelectedTime={setSelectedTime}
        //   />
        // </div>
        //     </div>

        //     {/* Submit Button Below */}
        //     <div className="flex justify-center mt-6">
        //         <Button
        //             type="submit"
        //             className="bg-gradient-to-r from-teal-600 to-emerald-300 text-white font-serif rounded-xl px-6 py-2"
        //         >
        //             Add Appointment
        //         </Button>
        //     </div>

        //     {errorPublishing && (
        //         <Alert className="mt-5" color="failure">
        //             {errorPublishing}
        //         </Alert>
        //     )}
        // </div>


        <div className="p-5 max-w-6xl mx-auto h-screen">
            <h1 className="text-center text-3xl my-5 font-semibold">Book Appointment</h1>

            <div className="flex flex-col md:flex-row justify-between gap-10">
                {/* Calendar Section */}
                <div className="w-full md:w-1/2 h-[70vh] bg-white shadow-lg rounded-lg p-4">
                    <BookingCalendar
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                        selectedTime={selectedTime}
                        setSelectedTime={setSelectedTime}
                    />
                </div>

                {/* Conditionally Render Form Section */}
                {selectedTime && (
                    <div className="w-full md:w-1/2 bg-white p-6 shadow-md rounded-lg">
                        <form className="flex flex-col gap-4" onSubmit={submitNewPost}>
                            <TextInput
                                type="text"
                                placeholder="Name"
                                required
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                            <TextInput
                                type="email"
                                placeholder="Email"
                                required
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                            <TextInput
                                type="tel"
                                placeholder="Phone"
                                required
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                            <TextInput
                                type="number"
                                placeholder="Age"
                                required
                                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                            />

                            <Select
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            >
                                <option value="uncategorized">Service</option>
                                <option value="Dental Checkup">Dental Checkup</option>
                                <option value="Teeth Cleaning - Prophylaxis">Teeth Cleaning - Prophylaxis</option>
                                <option value="Theeth Whitening">Theeth Whitening</option>
                                <option value="Other Cosmetic Dentistry">Other Cosmetic Dentistry</option>
                                <option value="Restorative Dentistry">Restorative Dentistry</option>
                                <option value="Orthodontics Consultation">Orthodontics Consultation</option>
                                <option value="Orthodontics">Orthodontics</option>
                                <option value="Pediatric Dentistry">Pediatric Dentistry</option>
                                <option value="Oral Surgery">Oral Surgery</option>
                                <option value="Gum Care">Gum Care</option>
                                <option value="Toothache Relief">Toothache Relief</option>
                                <option value="Broken or Chipped Tooth Repair">Broken or Chipped Tooth Repair</option>
                                <option value="Knocked-Out Tooth Treatment">Knocked-Out Tooth Treatment</option>
                            </Select>

                            <Textarea
                                placeholder="Comment..."
                                required
                                className="border-gray-300 rounded-lg p-4 h-32 mb-4"
                                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                            />

                            <Button
                                type="submit"
                                className="bg-gradient-to-r from-teal-600 to-emerald-300 text-white font-serif rounded-xl px-6 py-2"
                            >
                                Add Appointment
                            </Button>
                        </form>
                    </div>
                )}
            </div>

            {errorPublishing && (
                <Alert className="mt-5" color="failure">
                    {errorPublishing}
                </Alert>
            )}
        </div>
    

    )
}
