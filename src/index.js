import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// Here <App> will recieve the information from App.js
// en then load the information (Reander the React App) into:
// document.getElementById('root') =>(Html tag)and get into the file index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);