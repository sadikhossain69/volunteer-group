import './Register.css'
import React from 'react';
import { BsGoogle } from 'react-icons/bs'

const Register = () => {
    return (
        <div style={{ height: '80vh' }} className='d-flex justify-content-center align-items-center' >
            <div>
                <h2>This is Register!!!</h2>
                <button className='w-100 register-button'>
                    <BsGoogle/>
                    Contiue with Google
                </button>
            </div>
        </div>
    );
};

export default Register;