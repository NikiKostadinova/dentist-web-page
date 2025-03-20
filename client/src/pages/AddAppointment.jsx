import React from 'react'

import { Alert, Button, Select, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";

import {useNavigate} from 'react-router-dom';


export default function AddAppointment() {


   const [formData, setFormData] = useState({});
   const [errorPublishing, setErrorPublishing] = useState(null);

   const navigate = useNavigate();

   

    const submitNewPost = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('api/post/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if(!res.ok) {
                setErrorPublishing(data.message)
                return
            }
          
            if(res.ok){
                setErrorPublishing(null);
                navigate(`/post/${data.slug}`)
            }
        } catch (error) {
            console.log(error);
            setErrorPublishing('Something went wrong!')
        }
    }
    return (
        <div className="p-3 max-w-3xl mx-auto min-h-screen">
            <h1 className="text-center text-3xl my-7 font-semibold">Add Appointment</h1>
            <form className="flex flex-col gap-4" onSubmit={submitNewPost}>
                <div className="flex flex-col gap-4 sm:flex-row justify-between">
                    <TextInput type="text" placeholder="Title" required id="title" className="flex-1" onChange={(e) => 
                    setFormData({...formData, title: e.target.value})
                    }/>
                    <Select onChange={(e) => 
                    setFormData({...formData, category: e.target.value})
                    }>
                        <option value="uncategorized">Category</option>
                        <option value="Pregnancy">Pregnancy</option>
                        <option value="Newborn">Newborn</option>
                        <option value="First Year">First Year</option>
                        <option value="Toddlers">Toddlers</option>
                        <option value="Pre Schoolers">Preschoolers</option>
                        <option value="School Age">School Age</option>
                        <option value="Teens">Teens</option>

                    </Select>
                </div>
                
                {formData.image && (
                    <img src={formData.image} alt="cover" className="w-full h-72 object-cover"/>
                )}        
                <div className='flex flex-col gap-4'>
                    <Textarea
                        placeholder="Your content here..."
                        required
                        id="content"
                        className="border-2 border-gray-300 rounded-lg p-4 h-72 mb-4 whitespace-pre-wrap"  
                        onChange={(e) => 
                            setFormData({...formData, content: e.target.value})
                            }                      
                    />
                    <Button type='submit'className='bg-gradient-to-r from-teal-600 to-emerald-300 text-white font-serif  rounded-xl'>Add Appointment</Button>
                    {errorPublishing && <Alert className="mt-5" color='failure'>{errorPublishing}</Alert>}
                </div>
            </form>

        </div>
    )
}
