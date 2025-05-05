// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkmKZHUfUkdnWK1EiNqmhvFlyDWOODLI4",
  authDomain: "eventero-assignment9.firebaseapp.com",
  projectId: "eventero-assignment9",
  storageBucket: "eventero-assignment9.firebasestorage.app",
  messagingSenderId: "335375021092",
  appId: "1:335375021092:web:a9bc4c04525b19eb21d4b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);