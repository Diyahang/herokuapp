// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "binarcar-1d146.firebaseapp.com",
  projectId: "binarcar-1d146",
  storageBucket: "binarcar-1d146.appspot.com",
  messagingSenderId: "142805510838",
  appId: "1:142805510838:web:aa25003568f1073ff19417",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
