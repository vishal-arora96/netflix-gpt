// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnvSZw18m95pZfFhTl_fE3wYnjf1GEkZ8",
  authDomain: "netflixgpt-a2a4d.firebaseapp.com",
  projectId: "netflixgpt-a2a4d",
  storageBucket: "netflixgpt-a2a4d.appspot.com",
  messagingSenderId: "510842107002",
  appId: "1:510842107002:web:34654b252cea9f0ba5b7c3",
  measurementId: "G-ND4PG8YEX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();