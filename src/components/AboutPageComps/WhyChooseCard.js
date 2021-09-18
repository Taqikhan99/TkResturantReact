import React from 'react';

const WhyChooseCard = ({num,reason}) => {
    return (
        <div className='col-md-3 col-sm-5 p-4 mx-3 chooseCard my-3'>
            <h6 style={{color:'orangered'}}>{num}</h6>
            <h4>{reason}</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam culpa ad dignissimos blanditiis nemo hic nam cumque a tempora labore?</p>
        </div>
    );
};

export default WhyChooseCard;