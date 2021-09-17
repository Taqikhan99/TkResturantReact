import React, { useState } from 'react';
import { toast } from 'react-toastify';
import emailpic from '../../images/envelope.png'
import location from '../../images/placeholder.png'
import phone from '../../images/telephone(1).png'

const Contactform = () => {

    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[subject,setSubject]=useState('')
    const[message,setMessage]=useState('')
    
    const inputs=document.getElementsByTagName('input')
    const inputsArray=Array.from(inputs)
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!name||!email||!message){
            toast.error('Please fill the fields',{theme:'dark'})
            inputsArray.map((elem)=>{
                console.log(elem);
                
                elem.style.border='2px solid red'
                setTimeout(() => {
                    elem.style.border='1px solid white'
                }, 3500);
                
            })
        }

    }

    // contactform section
    return (
        <div className='container-fluid ContactformSec'>
            <div className="row  d-flex py-5  justify-content-around">
                <div className="col-md-4 d-flex flex-column justify-content-evenly mb-3">
                        <div className="infotype d-flex justify-content-start align-items-end mb-2 ">
                            <div className="infoimage">
                            <img src={location} alt="" />
                            
                            </div>
                            <p>Malir Karachi</p>
                            
                        </div>
                        <div className="infotype d-flex justify-content-start align-items-end mb-2 ">
                            <div className="infoimage">
                            <img src={emailpic} alt="" />
                            
                            </div>
                            <p>taqiahmed2122@gmail.com</p>
                            
                        </div>
                        <div className="infotype d-flex justify-content-start align-items-end mb-2 ">
                            <div className="infoimage">
                            <img src={phone} alt="" />
                            
                            </div>
                            <p>+92123456789</p>
                            
                        </div>
                        
                </div>
                {/* form here */}
                <div className="col-md-7">
                    <form action="" onSubmit={handleSubmit}>
                    <div className="row mb-2">
                        <div className="col-md-6 mb-2">
                            <input type="text" className='form-control' placeholder='Your Name' onChange={(e)=>{setName(e.target.value)}} />
                        </div>
                        <div className="col-md-6">
                        <input type="text" className='form-control' placeholder='Your Email' onChange={(e)=>{setEmail(e.target.value)}} />

                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-md-12">
                        <input type="text" className='form-control' placeholder='Subject' onChange={(e)=>{setSubject(e.target.value)}} />

                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-md-12">
                        <textarea name="message" id="messagebox" placeholder='Write your message'  rows="5" onChange={(e)=>{setMessage(e.target.value)}}></textarea>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                        <button type='submit' className="btn btn-danger">Send Message</button>
                        </div>
                        
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contactform;