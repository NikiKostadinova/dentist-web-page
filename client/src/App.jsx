import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header';
import LogIn from './pages/LogIn';
import Register from './pages/Register';

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/reviews" element={<Reviews/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/register" element={<Register/>}/>


      </Routes>   
      
      
      <Footer />
    </BrowserRouter>
  )
}
