import React from 'react';
import WhyChooseCard from './WhyChooseCard';

const WhyChoose = () => {
    return (
        <div className='container-fluid p-5 chooseus'>
            <div className="row ">
                <div className="col-md-10 mx-auto">
                <h5>Choose Us</h5>
                <h2>Why <span style={{color:'orangered'}}>Choose Us</span></h2>
                </div>
                
            </div>
            <div className="row">
                <div className="col-md-12 ">
                    <div className="row border d-flex justify-content-center">
                    <WhyChooseCard num='01' reason='Delicious Food'/>
                    <WhyChooseCard num='02' reason='Expert Chefs'/>
                    <WhyChooseCard num='03' reason='Friendly People'/>
                    
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;