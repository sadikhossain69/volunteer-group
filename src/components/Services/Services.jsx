import './Services.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/services`
        axios.get(url)
            .then(res => {
                setServices(res.data);
            })
    }, [])

    return (
        <div className='container'>
            <h2>This is Services {services.length} </h2>
            <div className="row">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default Services;