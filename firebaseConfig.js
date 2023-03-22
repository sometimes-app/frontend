// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKSBD6rF1aywLK5EgkVe6S-clivgYekXE",
  authDomain: "sometimes-f29fb.firebaseapp.com",
  projectId: "sometimes-f29fb",
  storageBucket: "sometimes-f29fb.appspot.com",
  messagingSenderId: "432607254148",
  appId: "1:432607254148:web:23a1ba0aef042704dc14d1",
  measurementId: "G-91R96GHZBT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const authentication = getAuth(app);
