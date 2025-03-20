import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import LogIn from './pages/LogIn';
import Register from './pages/Register';
import HomePage from './pages/homeScreen/HomeScreen';
import Header from './components/Header';
import Footer from './components/Footer'
import AddAppointment from './pages/AddAppointment';

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* Single-page scroll layout for the main website */}
        <Route path="/" element={<HomePage />} />

        {/* Separate pages for login, register, and dashboard */}
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-appointment" element={<AddAppointment/>}/>
        
      </Routes>
      
      
      <Footer />
    </BrowserRouter>
  )
}
