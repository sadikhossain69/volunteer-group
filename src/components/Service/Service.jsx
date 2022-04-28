import './Service.css'
import React from 'react';

const Service = ({ service }) => {
    const { name, photoUrl } = service
    return (
        <div className='col-lg-3 col-md-4 col-sm-6 service-container'>
            <div>
                <img className='img-fluid' src={photoUrl} alt="" />
                <span>
                    <h5 className='btn btn-outline-success text-center d-block' >{name}</h5>
                </span>
            </div>

        </div>
    );
};

export default Service;