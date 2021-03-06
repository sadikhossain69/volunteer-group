import './Home.css'
import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <div className='text-center mt-5'>
                <PageTitle route="Home" />
                <h2>I GROW BY HELPING PEOPLE IN NEED.</h2>
            </div>
                <Services />
        </>
    );
};

export default Home;