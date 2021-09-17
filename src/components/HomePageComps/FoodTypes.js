import React, { useState } from 'react';
import breakfast from '../../images/breakfast.png'
import dinner from '../../images/christmas-dinner.png'
import lunch from '../../images/salad.png'
import drinks from '../../images/soda.png'
const FoodTypes = (props) => {
    const [type,setType]=useState('')

    const activeFoodType=(e)=>{
       
        const activeType=e.target.textContent
        if (activeType){
            setType(activeType)

        }
    }
    return{ 
        type,
        render:
        (
        <div>
            <ul className='foodTypes'>
                            <li onClick={activeFoodType} className='d-flex justify-content-start align-items-center'>
                                <img src={breakfast} alt=""/><h5>Breakfast</h5>
                                
                            </li>
                            <li onClick={activeFoodType} className='d-flex justify-content-start align-items-center'>
                                <img src={lunch} alt="" />
                                <h5>Lunch</h5>
                            </li>
                            <li onClick={activeFoodType} className='d-flex justify-content-start align-items-center'>
                                <img src={dinner} alt="" /><h5>Dinner</h5></li>
                            <li onClick={activeFoodType} className='d-flex justify-content-start align-items-center'>
                            <img src={drinks} alt="" /><h5>Drinks</h5></li>
                            
                        </ul>
        </div>
    )}
};

export default FoodTypes;