import React from 'react';
import './styles.css'
const Hero = ({head1,head6,btntext}) => {
    return (
        <div>
            <div className="container-fluid heroSec d-flex justify-content-center align-items-center ">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                        <div className='d-flex flex-column justify-content-around align-items-center heroText'>
                        <h6>{head6}</h6>
                        <h1>{head1}</h1>
                        <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, temporibus. Aliquam amet inventore saepe earum nihil veniam vero. Dolore iure rerum vel voluptate perspiciatis cupiditate, consectetur eum autem incidunt accusantium.</h6>
                        <button className=" btn-exp">{btntext}</button>
                    </div>
                        </div>
                    </div>
                    
            </div>
        </div>
    );
};

export default Hero;