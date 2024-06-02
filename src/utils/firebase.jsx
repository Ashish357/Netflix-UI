// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBMPMYTkuHGWJDvHW12BbmW4dbENO_EO4",
  authDomain: "netflix-f197d.firebaseapp.com",
  projectId: "netflix-f197d",
  storageBucket: "netflix-f197d.appspot.com",
  messagingSenderId: "727088949901",
  appId: "1:727088949901:web:a70a1febe781bd488a10c4",
  measurementId: "G-63CNG56711"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();