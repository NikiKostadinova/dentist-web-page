import React from "react";


import Home from "../../components/Home";
import AboutUs from "../../components/AboutUs";
import Services from "../../components/Services";
import Reviews from "../../components/Reviews";
import Contact from "../../components/Contact";

export default function HomePage() {
    return (
        <>

            <section id="home"><Home /></section>
            <section id="about-us"><AboutUs /></section>
            <section id="services"><Services /></section>
            <section id="reviews"><Reviews /></section>
            <section id="contact"><Contact /></section>

        </>
    );
}
