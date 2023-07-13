import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import '../src/index.css';
import App from '../src/companents/App/App.jsx';

const main = ReactDOM.createRoot(document.getElementById('main'));
main.render(
    <BrowserRouter>    
      <App />
    </BrowserRouter>
);


