// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhp5JkmFqRN5izqGbRkNAFfDWMbNEdEsg",
  authDomain: "trip-planner-4b174.firebaseapp.com",
  projectId: "trip-planner-4b174",
  storageBucket: "trip-planner-4b174.firebasestorage.app",
  messagingSenderId: "69341706010",
  appId: "1:69341706010:web:b63d560ccf9efd9e0bdea3",
  measurementId: "G-EDWSV153D0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);