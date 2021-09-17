import React from 'react';

const Desert = ({ name, image, price }) => {
    return (
        <div className="col-md-3 col-sm-6 col-xs-12">
            <div className='desert p-2 mx-2'>
                <img src={image} alt="" />
                <div className="info p-3">
                    <h5>{name}</h5>
                    <h6 style={{color:'orangered'}}>{price}</h6>
                </div>
            </div>
        </div>

    );
};

export default Desert;