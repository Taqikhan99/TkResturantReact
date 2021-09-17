import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const About = () => {
    return (
        <div>
            <Navbar/>
            <Hero head6='Our Resturaunt' head1='ABOUT US' btntext='Explore Now'/>
        </div>
    );
};

export default About;