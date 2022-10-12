import React from 'react';
import '../App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import NavBar from './Navbar/Navbar';
import ContactList from './ContactList/ContactList';

let App = () => {
  return (
    <React.Fragment>
      <NavBar/>
      <Routes>
        <Route path = "/" element={<Navigate to={'/contacts/list'}/>}/>
        <Route path = "/contacts/list" element = {<ContactList/>} />                        
      </Routes>
    </React.Fragment>
  );
}

export default App;
