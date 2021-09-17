import React from 'react';

const FoodCard = (props) => {
    return (
        
        <div>
            
            <div class="card my-2">
                <img className='px-3 py-1' src={props.food?props.food.url:props.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">
                        {props.food? props.food.name:'Select food type'   }
                    </h5>
                    <p class="card-text">{props.food?props.food.price:null}</p>
                    <a href="#" class="btn btn-primary">Buy Now</a>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;