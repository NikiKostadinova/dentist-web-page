import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Reviews from './components/Reviews'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <AboutUs/>
      <Services/>
      <Reviews/>
    </div>
  )
}
