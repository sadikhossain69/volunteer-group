import './Service.css'
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Service = ({ service }) => {
    const { _id, name, photoUrl } = service

    const handleServiceName = event => {
        toast('Your One Help Will Save A Life😊')
        console.log(event);
    }

    return (
        <div className='col-lg-3 col-md-4 col-sm-6 service-container'>
            <div>
                <img className='img-fluid' src={photoUrl} alt="" />
                <span>
                    <h5 onClick={handleServiceName} className='btn btn-outline-success text-center d-block' >{name}</h5>
                </span>
                <Toaster />
            </div>

        </div>
    );
};

export default Service;