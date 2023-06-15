import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css';
import App from '../src/companents/App/App.jsx';

const main = ReactDOM.createRoot(document.getElementById('main'));
main.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


