import React from 'react';
import Chefcard from './Chefcard';
import chefImagesLinks from '../../data/chefdata';
const ProfessionalChefs = () => {
    return (
        <div className='container-fluid profChefs'>
            {/* topsection */}
            <div className="row">
                <div className="col-md-5 mx-auto my-5 text-center px-3">
                    <h5>Chef</h5>
                    <h2>Our <span style={{color:'orangered'}}>Professional Chefs</span></h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
            </div>
            {/* chefs images sec */}
            <div className="row">
                <div className="col-md-10 mx-auto ">
                    <div className="row py-3 ">
                            <Chefcard cName='James Anderson' cPost='Master Chef' bgImg={chefImagesLinks[1]}/>
                            <Chefcard cName='Jameel Ansari' cPost='Cook' bgImg={chefImagesLinks[0]}/>
                            <Chefcard cName='Muhammad Zakir' cPost='Master Chef' bgImg={chefImagesLinks[2]}/>
                            
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfessionalChefs;