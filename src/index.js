import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './search-components/App'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"; // Import the storage module

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkQvmQ4pqQ5o0U7NDjjUQAEa1eGRFmVKc",
  authDomain: "project-shiyishe-d8ad0.firebaseapp.com",
  databaseURL: "https://project-shiyishe-d8ad0-default-rtdb.firebaseio.com",
  projectId: "project-shiyishe-d8ad0",
  storageBucket: "project-shiyishe-d8ad0.appspot.com",
  messagingSenderId: "313874344227",
  appId: "1:313874344227:web:d4c8de9376f7901fc24496"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
getStorage(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);