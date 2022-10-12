import React, {useEffect, useState} from 'react';
import axios from 'axios';

let ContactList = () => {
    const url = "https://jsonplaceholder.typicode.com/users/"

    const [data, setDate] = useState([]);
    const [selectedPerson, setSelectedPerson] = useState({});

    useEffect(() => {
        axios.get(url)
        .then(res => {
            console.log("getting all users", res.data)
            setDate(res.data)
            setSelectedPerson(res.data[0]);
        })
        .catch(err => console.log(err))
    }, [])

    const changeSelectedPerson = (id) => {
        console.log(id);
        const person = data.filter((person) => person.id === id);
        setSelectedPerson(person[0]);
    }

    const people = data.map((person, index) => { //iterate trough JSON data recieved and select individual parameters to render on DOM
        return (
            
            <ul className='list-group' onClick={ () => changeSelectedPerson(person.id) } key={ person.id }>
             <li className='list-group-item list-group-item-action'>
                 Name: <span className='fw-bold'>{person.name}</span>
            </li>
            </ul>
        )
    })              
    return(
        <React.Fragment>
           <section className='subheader p-5'>
                <div className='container'>
                    <div className='grid'>
                        <div className='row'>
                            <div className='col'>
                                <p className="h2 fw-bold">Browse All Contacts:</p>
                                <p className=' h5 fst-italic'> Click on the contact name to display it's info </p>
                            </div>
                        </div>
                    </div>
                </div>
           </section>
           <section className='contact-list'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">                                                     
                            <div className="col-md-7">
                                {people}
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
                                                    Name: <span className='fw-bold'>{ selectedPerson.name || 'Loading...' }</span>
                                                </li>
                                                <li className='list-group-item list-group-item-action'>
                                                    Mobile: <span className='fw-bold'>{ selectedPerson.phone || 'Loading...' }</span>
                                                </li>
                                                <li className='list-group-item list-group-item-action'>
                                                    Email: <span className='fw-bold'>{ selectedPerson.email || 'Loading...' }</span>
                                                </li>
                                                <li className='list-group-item list-group-item-action'>
                                                    Username: <span className='fw-bold'>{ selectedPerson.username || 'Loading...' }</span>
                                                </li>
                                                <li className='list-group-item list-group-item-action'>
                                                    Website: <span className='fw-bold'>{ selectedPerson.website || 'Loading...'}</span>
                                                </li> 
                                                <li className='list-group-item list-group-item-action'>
                                                    Address: <span className='fw-bold'>{ selectedPerson.address.street + ', '+ selectedPerson.address.city || 'Loading...'}</span>
                                                </li>
                                                <li className='list-group-item list-group-item-action'>
                                                    Company: <span className='fw-bold'>{ selectedPerson.company.name || 'Loading...'}</span>
                                                </li>                                                                                                                                                                                                                                                                                                                                                                                                                   
                                            </ul>
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