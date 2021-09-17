import React from 'react';
import { desserts } from '../../data/fooditems';
import Desert from './Desert';
const Desserts = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                <div className="deserttop col-12">
                    <h5 className='text-center'>CHOOSE DESERTS</h5>
                    <h2 className='text-center'>Popular <span style={{color:'orangered',fontWeight:'bolder'}}>Desserts</span></h2>
                </div>
                </div>
                <div className="row p-3">
                    
                    {
                        desserts.map((dessert)=>(
                            
                            <Desert name={dessert.name} image={dessert.url} price={dessert.price}/>
                        ))
                    }
                    
                </div>
                
            </div>
        </div>
    );
};

export default Desserts;