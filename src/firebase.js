// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7c82Wlx7XQB7qNc0ZN4Y7dfh6IE9A1No",
  authDomain: "eldearly-41694.firebaseapp.com",
  projectId: "eldearly-41694",
  storageBucket: "eldearly-41694.firebasestorage.app",
  messagingSenderId: "383666548833",
  appId: "1:383666548833:web:f3cb1a0449134a2ea1fa20",
  measurementId: "G-Q7MXDKD85W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);