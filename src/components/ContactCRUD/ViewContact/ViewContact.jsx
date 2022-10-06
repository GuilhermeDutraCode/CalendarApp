import React from 'react';
import {Link} from 'react-router-dom';

let ViewContact = () => {
    return(
        <React.Fragment>
          <section className='view-contact-intro p-3'>
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <p className="h3 text-warning fw-bold">View Contact</p>
                        <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt qui sequi quis natus repellendus delectus nihil placeat nisi ut pariatur amet, velit quisquam nemo aliquam, quam nesciunt officiis recusandae repellat?</p>
                    </div>
                </div>
            </div>
          </section>
          <section className='view-contact mt-3'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <img src="https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png" className='contact-img' alt="user-img" />
                    </div>
                    <div className="col-md-8">
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
                            <li className='list-group-item list-group-item-action'>
                            Company: <span className='fw-bold'>guilhermedutra02syd@gmail.com</span>
                            </li>
                            <li className='list-group-item list-group-item-action'>
                            Title: <span className='fw-bold'>guilhermedutra02syd@gmail.com</span>
                            </li>
                            <li className='list-group-item list-group-item-action'>
                            Group: <span className='fw-bold'>guilhermedutra02syd@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                    
                    
                </div>
                
                <div className="row">
                    <div className="col">
                        <Link to={'/contacts/list'} className="btn btn-warning">Back</Link>
                    </div>
                </div>
            </div>
          </section>
        </React.Fragment>
    )
}

export default ViewContact;
