import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"; // Import the storage module
import { getDatabase } from 'firebase/database';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './search-components/App'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkQvmQ4pqQ5o0U7NDjjUQAEa1eGRFmVKc",
    authDomain: "project-shiyishe-d8ad0.firebaseapp.com",
    databaseURL: "https://project-shiyishe-d8ad0-default-rtdb.firebaseio.com",
    projectId: "project-shiyishe-d8ad0",
    storageBucket: "project-shiyishe-d8ad0.appspot.com",
    messagingSenderId: "313874344227",
    appId: "1:313874344227:web:419c388e69aae736c24496"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const firebaseStorage = getStorage(firebaseApp);

// Initialize Firebase Database
const db = getDatabase();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

export { firebaseStorage, db };