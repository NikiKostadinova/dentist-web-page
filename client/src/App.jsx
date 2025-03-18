import React from 'react'
import { BrowserRouter } from 'react-router-dom';


import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <AboutUs />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
    </BrowserRouter>
  )
}
