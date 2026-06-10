// Import the functions you need from the SDKs you need
import {getAuth} from "firebase/auth"
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.Firebase_API_Key,
  authDomain: "kart-e661d.firebaseapp.com",
  projectId: "kart-e661d",
  storageBucket: "kart-e661d.firebasestorage.app",
  messagingSenderId: "2359893922",
  appId: "1:2359893922:web:5ce8b8469d4d2a33d45cfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)