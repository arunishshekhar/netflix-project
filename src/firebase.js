// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkUix4oJkjJ_5qT8bLaqrDMCxBuujN1-8",
  authDomain: "netflix-app-c95ff.firebaseapp.com",
  projectId: "netflix-app-c95ff",
  storageBucket: "netflix-app-c95ff.appspot.com",
  messagingSenderId: "1055017079388",
  appId: "1:1055017079388:web:c7e41efdab0f9e88f84c99",
  measurementId: "G-1111RVKTZ2"
};


const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);