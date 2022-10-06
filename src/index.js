import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'; //Fontawesome 
import 'bootstrap/dist/css/bootstrap.css'; //bootsrap
import 'bootstrap/dist/js/bootstrap.bundle'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

