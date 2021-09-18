import React from 'react';

const Chefcard = ({cName,cPost,bgImg}) => {
    return (
        <div className='col-md-3 col-sm-5 mx-auto chefcard' style={{background:`linear-gradient(190deg,rgba(255,254,255,0.4)0%,rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.6)100%),url(${bgImg})`}}>
            <div className="chefinfo d-flex flex-column justify-content-center align-items-center">
                <h3>{cName}</h3>
                <h5>{cPost}</h5>
            </div>
        </div>
    );
};

export default Chefcard;