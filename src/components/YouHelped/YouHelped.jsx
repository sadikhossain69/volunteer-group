import './YouHelped.css'
import React, { useEffect, useState } from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import axios from 'axios';
import Help from '../Help/Help';

const YouHelped = () => {

    const [helped, setHelped] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/youhelped`
        axios.get(url)
            .then(res => {
                setHelped(res.data);
            })
    }, [])

    return (
        <div className='container'>
            <PageTitle route='Your Helped' />
            <h2>You Helped People!!!</h2>
            <div className="row">
                {
                    helped.map(help => <Help key={help._id} help={help} />)
                }
            </div>
        </div>
    );
};

export default YouHelped;