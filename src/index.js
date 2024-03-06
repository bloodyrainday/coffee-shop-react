import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App';
import './css/main.css'


const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
    <App />
);
