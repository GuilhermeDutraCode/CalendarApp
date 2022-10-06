import React from 'react';
import '../App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import NavBar from './Navbar/Navbar';
import ContactList from './ContactCRUD/ContactList/ContactList';
import AddContact from './ContactCRUD/AddContact/AddContact';
import ViewContact from './ContactCRUD/ViewContact/ViewContact';
import EditContact from './ContactCRUD/EditContact/EditContact';

let App = () => {
  return (
    <React.Fragment>
      <NavBar/>
      <Routes>
        <Route path = "/" element={<Navigate to={'/contacts/list'}/>}/>
        <Route path = "/contacts/list" element = {<ContactList/>} />
        <Route path = "/contacts/add" element = {<AddContact/>} />
        <Route path = "/contacts/view/:contactId" element = {<ViewContact/>} />
        <Route path = "/contacts/edit/:contactId" element = {<EditContact/>} />
        

        
      </Routes>
    </React.Fragment>
  );
}

export default App;
