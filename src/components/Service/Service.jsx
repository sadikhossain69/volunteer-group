import './Service.css'
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const Service = ({ service }) => {
    const { name, photoUrl } = service

    const handleServiceName = event => {
        toast('Thanks For Helping!😊')
        console.log(event);
        const url = `http://localhost:5000/youhelped`
        axios.post(url, {
            name: name,
            photoUrl: photoUrl
        })
        .then(res => {
            console.log(res);
        })
    }

    return (
        <div className='col-lg-3 col-md-4 col-sm-6 service-container'>
            <div>
                <img className='img-fluid' src={photoUrl} alt="" />
                <span>
                    <h5 onClick={() => handleServiceName(service)} className='btn btn-outline-success text-center d-block' >{name}</h5>
                </span>
                <Toaster />
            </div>

        </div>
    );
};

export default Service;