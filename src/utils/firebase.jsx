// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWosluaIGbnNtjmVRNiyR_LS_NTL1tpmg",
  authDomain: "netflix-77447.firebaseapp.com",
  projectId: "netflix-77447",
  storageBucket: "netflix-77447.appspot.com",
  messagingSenderId: "400109014646",
  appId: "1:400109014646:web:2ce24a9b746bbacf14d957",
  measurementId: "G-ZQR9F8FXGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();