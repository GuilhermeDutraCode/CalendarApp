import React from 'react';
import {Link} from 'react-router-dom';

let ContactList = () => {
    return(
        <React.Fragment>
           <section className='contact-search p-3'>
                <div className='container'>
                    <div className='grid'>
                        <div className='row'>
                            <div className='col'>
                                <p className="h3 fw-bold">Contact Manager
                                    <Link to={'/contacts/add'} className="btn btn-primary ms-2">
                                    <i className='fa fa-plus-circle me-2'/>
                                    New</Link>
                                </p>
                                <p className='fst-italic'> This is a web application built by Resonate Solutions where users can manage and view their contacts</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <form className='row'>
                                    <div className='col'>
                                        <div className='mb-2'>
                                            <input type="text" className='form-control' placeholder='Search Names'/>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='mb-2'>
                                            <input type="submit" className='btn btn-outline-dark' value='Search '/>
                                        </div>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
           </section>
           <section className='contact-list'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                   <div className="row align-items-center d-flex justify-content-around">
                                    <div className="col-md-4">
                                            <img src="https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png" alt="user" className='contact-img' />
                                        </div>
                                        <div className="col-md-7">
                                            <ul className='list-group'>
                                                <li className='list-group-item list-group-item-action'>
                                                    Name: <span className='fw-bold'>Guilherme</span>
                                                </li>
                                                <li className='list-group-item list-group-item-action'>
                                                    Mobile: <span className='fw-bold'>04102298</span>
                                                </li>
                                                <li className='list-group-item list-group-item-action'>
                                                    Email: <span className='fw-bold'>guilhermedutra02syd@gmail.com</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='col-md-1 d-flex flex-column align-items-center my-1'>
                                            <Link to={'/contacts/view/:contactId'} className='btn btn-warning'>
                                                <i className='fa fa-eye'/>
                                            </Link>
                                            <Link to={'/contacts/edit/:contactId'} className='btn btn-primary'>
                                                <i className='fa fa-pen'/>
                                            </Link>
                                           <button className='btn btn-danger'>
                                                <i className='fa fa-trash'/>
                                           </button>
                                        </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                   <div className="row align-items-center d-flex justify-content-around">
                                    <div className="col-md-4">
                                            <img src="https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png" alt="user" className='contact-img' />
                                        </div>
                                        <div className="col-md-7">
                                            <ul className='list-group'>
                                                <li className='list-group-item list-group-item-action'>
                                                    Name: <span className='fw-bold'>Guilherme</span>
                                                </li>
                                                <li className='list-group-item list-group-item-action'>
                                                    Mobile: <span className='fw-bold'>04102298</span>
                                                </li>
                                                <li className='list-group-item list-group-item-action'>
                                                    Email: <span className='fw-bold'>guilhermedutra02syd@gmail.com</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='col-md-1 d-flex flex-column align-items-center my-1'>
                                            <Link to={'/contacts/view/:contactId'} className='btn btn-warning'>
                                                <i className='fa fa-eye'/>
                                            </Link>
                                            <Link to={'/contacts/edit/:contactId'} className='btn btn-primary'>
                                                <i className='fa fa-pen'/>
                                            </Link>
                                           <button className='btn btn-danger'>
                                                <i className='fa fa-trash'/>
                                           </button>
                                        </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </section>
        </React.Fragment>
    )
}

export default ContactList;
