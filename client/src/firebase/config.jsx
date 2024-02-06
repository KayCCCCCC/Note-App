// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3zqRrwrz65Jnd9PNo-bMNOMjrz9eBCNU",
    authDomain: "note-app-4f27b.firebaseapp.com",
    projectId: "note-app-4f27b",
    storageBucket: "note-app-4f27b.appspot.com",
    messagingSenderId: "1078129741420",
    appId: "1:1078129741420:web:47519503e92212dcb21249",
    measurementId: "G-FWB9HN7447"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);