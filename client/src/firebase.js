// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-34e2a.firebaseapp.com",
  projectId: "real-estate-34e2a",
  storageBucket: "real-estate-34e2a.appspot.com",
  messagingSenderId: "260697459622",
  appId: "1:260697459622:web:836c100ab2ff2d5cf05d67"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);