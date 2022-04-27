import './Register.css'
import React from 'react';
import { BsGoogle } from 'react-icons/bs'

const Register = () => {
    return (
        <div style={{ height: '80vh' }} className='d-flex justify-content-center align-items-center' >
            <div>
                <h2>Registration With!</h2>
                <button className='w-100 btn btn-primary register-button mt-3'>
                    <BsGoogle/>
                    <span className='m-2'>Contiue with Google</span>
                </button>
            </div>
        </div>
    );
};

export default Register;