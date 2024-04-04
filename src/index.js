import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqeoI1nIWdR2NlUaKKLNnNinesAe4TzB0",
    authDomain: "coderhouse-ecommerce1.firebaseapp.com",
    projectId: "coderhouse-ecommerce1",
    storageBucket: "coderhouse-ecommerce1.appspot.com",
    messagingSenderId: "828808356091",
    appId: "1:828808356091:web:d01f44d50057661e73d05e"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

