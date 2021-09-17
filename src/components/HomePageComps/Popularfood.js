import React from 'react';
import FoodCard from './FoodCard';
import FoodTypes from './FoodTypes';
import '../styles.css'
import breakfast from '../../images/breakfast.png'


import foodItems from '../../data/fooditems';
import Desserts from './Desserts';
const Popularfood = (props) => {

    const{type,render}=FoodTypes()
    const currentFoods=foodItems.filter((item)=>item.category===type)
    
    return (
        <div> 
            <div className="container-fluid foodstypeSec">
                <div className="row">
                    <div className="col-md-4 d-flex flex-column align-items-center mt-5 ">
                        <h5>Select Your Meal</h5>
                        <h2>Popular <span style={{color:'orangered',fontWeight:'bolder'}}>Foods</span> </h2>
                        {render}
                        {console.log(currentFoods)}
                    </div>
                    <div className="col-md-7 col-xs-12 mx-auto foodDisplay">
                            <div className="topSection ">
                            <h1 className="mx-4">{type}</h1>
                            </div>
                            <div className="container">
                            <div className="row foodCards">
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <FoodCard image={breakfast} food={currentFoods[0]}/>
                                </div> 
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <FoodCard image={breakfast} food={currentFoods[1]} />
                                </div> 
                                
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <FoodCard image={breakfast} food={currentFoods[2]}/>
                                </div> 
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <FoodCard image={breakfast} food={currentFoods[3]}/>
                                </div>
                               

                            </div>  
                            </div>          
                    </div>
                    
                </div>
                <div className="row mt-5">
                    <div className="col-md-12">
                        <Desserts/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popularfood;