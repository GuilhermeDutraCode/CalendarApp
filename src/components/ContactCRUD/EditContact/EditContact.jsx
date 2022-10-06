import React from 'react';
import {Link} from 'react-router-dom';
let EditContact = () => {
    return(
        <React.Fragment>
           <section className='add-contact p-3'>
                <div className='container'>
                    <div className="row align-items-center">
                        <div className="col">
                            <p className='h4 text-primary fw-bold'>Edit</p>
                            <p className='fs-italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ante elit, cursus id egestas sit amet, bibendum sollicitudin elit. Mauris est turpis, pharetra</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <form>
                                <div className="mb-2">
                                    <input type="text" className='form-control' placeholder='Name' />
                                </div>
                                <div className="mb-2">
                                    <input type="text" className='form-control' placeholder='Photo Url' />
                                </div>
                                <div className="mb-2">
                                    <input type="number" className='form-control' placeholder='Mobile' />
                                </div>
                                <div className="mb-2">
                                    <input type="email" className='form-control' placeholder='Company' />
                                </div>
                                <div className="mb-2">
                                    <input type="text" className='form-control' placeholder='Title' />
                                </div>
                                <div className="mb-2">
                                    <select className='form-control'>
                                        <option value=""> Select a Group </option>
                                    </select>
                                   
                                </div>
                                <div className="mb-2">
                                    <input type="submit" className='btn btn-primary' placeholder='Update' />
                                    <Link to={'/contacts/list'} className="btn btn-dark">Close</Link>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <img src="https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png" className='contact-img' alt="user-img" />
                        </div>
                    </div>
                </div>
           </section>
        </React.Fragment>
    )
}

export default EditContact;
