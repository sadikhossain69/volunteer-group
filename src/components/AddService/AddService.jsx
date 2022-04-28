import './AddService.css'
import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';

const AddService = () => {
    return (
        <div>
            <PageTitle route='Add Service' />
            <h2 className='text-center my-5' >This is Add service</h2>
            <div className="w-50 mx-auto">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Service Name</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='off' />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Photo URL</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='off' />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;