import React from 'react';
import { ToastContainer } from 'react-toastify';
import Contactform from '../components/ContactPageComps/Contactform';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import '../components/styles.css'
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
    return (
        <div>
            <Navbar/>
            <Hero head1={'CONTACT US'} head6={'GET IN TOUCH'} btntext={'Email Us'}/>
            <Contactform/>
            <ToastContainer autoClose={3000}/>
            <Footer/>
        </div>
    );
};

export default Contact;