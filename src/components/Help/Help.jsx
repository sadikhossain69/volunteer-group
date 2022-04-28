import './Help.css'
import React from 'react';

const Help = ({help}) => {

    const {name, photoUrl} = help

    return (
        <div className='col-lg-6 col-md-12 col-sm-12 text-center d-flex align-items-center card-container'>
            <img height={'200px'} className='me-2' src={photoUrl} alt="" />
            <h5>{name}</h5>
        </div>
    );
};

export default Help;