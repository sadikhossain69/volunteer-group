import './AddService.css'
import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const AddService = () => {

    const handleSubmit = event => {
        event.preventDefault()
        const name = event.target.name.value 
        const photoUrl = event.target.photoUrl.value
        console.log(name, photoUrl);
        const url = `http://localhost:5000/services`
        axios.post(url, {
            name: name,
            photoUrl: photoUrl
        })
        .then(response => {
            console.log({success: 'true',}, response);
            if(response.status === 200) {
                return toast('Added to the Service')
            }
        })
    }

    return (
        <div>
            <PageTitle route='Add Service' />
            <h2 className='text-center my-5' >This is Add service</h2>
            <div className="w-50 mx-auto">
                <form onSubmit={handleSubmit} >
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Service Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='off' name='name' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Photo URL</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='off' name='photoUrl' />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Service</button>
                </form>
            </div>
            <Toaster />
        </div>
    );
};

export default AddService;