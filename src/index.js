import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_6GoSrfGQ5YV31-wgbOnxTQ8p7Q6_Eew",
  authDomain: "fir-ecomm-dac32.firebaseapp.com",
  projectId: "fir-ecomm-dac32",
  storageBucket: "fir-ecomm-dac32.appspot.com",
  messagingSenderId: "771795023486",
  appId: "1:771795023486:web:0aeee5fc6e21c00f0f0a2f",
  measurementId: "G-96RL84MN8P"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
