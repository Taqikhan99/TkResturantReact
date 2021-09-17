import React from 'react';
import facebook from '../images/043-facebook-1.png'
import insta from '../images/034-instagram.png'
import pinterest from '../images/026-pinterest.png'
const Footer = () => {
    return (
        <div className='container-fluid bg-dark text-light pt-3'>
            <div className="row">
                <div className="col-md-3 mx-auto p-3">
                    <div className="row">
                        <div className="col-12 d-flex flex-column justify-content-around">
                        <h5>About TKMeals</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatibus iusto ad magni ullam ut id suscipit! Eos, odit aspernatur!</p>
                        <h6>Connect</h6>
                        </div>
                        <ul className='iconslist my-3'>
                            <li className='p-2'><img src={facebook} alt="" /></li>
                            <li className='p-2'><img src={pinterest} alt="" /></li>
                            <li className='p-2'><img src={insta} alt="" /></li>
                            <li className='p-2'><img src={insta} alt="" /></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-7 footerinfo">
                    <div className="row">
                    
                    <div className="col-xs-12 col-sm-4 mt-3">
                        <h5>Services</h5>
                        <p>Web Design</p>
                        <p>Frontend Web</p>
                        <p>Backend Web</p>
                        

                    </div>
                    <div className="col-xs-12 col-sm-4 mt-3">
                        <h5>Contact</h5>
                        <p>Malir Gulshan-e-rafi karachi</p>
                        <p>+9213456789021</p>
                        <p>taki2221@gmail.com</p>
                        

                    </div>
                    </div>
                </div>
            </div>
            <div className="row py-3">
                <h6 className='text-center text-warning'>Copyright @2021 All Rights Reserved TkMeals</h6>
            </div>
            
        </div>
    );
};

export default Footer;