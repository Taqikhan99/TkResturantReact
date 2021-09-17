import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Popularfood from '../components/HomePageComps/Popularfood';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero head6={'Enjoy your healthy delicious meal'} head1={'TREAT YOURSELF'} btntext='Explore Now'/>
            <Popularfood/>
            <Footer/>
            
        </div>
    );
};

export default Home;