import React from 'react';
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    
                    <Link className="navbar-brand" to='/'>TK MEALS</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className=" collapse navbar-collapse justify-content-between" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className='nav-link' to='/'>Home</Link>
                            </li>
                           
                            <li className="nav-item">
                            <Link className='nav-link' to='/about'>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='/contact'>Contact</Link>
                            </li>

                        </ul>
                        <div className="btnSec">
                       <button className="btn btn-danger">Book A table</button>
                    </div> 
                    </div>
                    
                </div>
            </nav>
        </div>
    );
};

export default Navbar;