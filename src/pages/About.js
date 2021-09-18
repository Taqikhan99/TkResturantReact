import React from 'react';
import ProfessionalChefs from '../components/AboutPageComps/ProfessionalChefs';
import WhyChoose from '../components/AboutPageComps/WhyChoose';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import '../components/styles.css'
const About = () => {
    return (
        <div>
            <Navbar/>
            <Hero head6='Our Resturaunt' head1='ABOUT US' btntext='Explore Now'/>
            <WhyChoose/>
            <ProfessionalChefs/>
            <Footer/>
        </div>
    );
};

export default About;