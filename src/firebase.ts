// This file is used to initialize firebase in the app
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// Import getFirestore
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDf80pHBoBtJ7e4F6rd12yCgi7OcLnJjIw",
  authDomain: "chatter-app-86e9f.firebaseapp.com",
  projectId: "chatter-app-86e9f",
  storageBucket: "chatter-app-86e9f.appspot.com",
  messagingSenderId: "947310293131",
  appId: "1:947310293131:web:1353e5a3ba97664708648e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Export firestore from firebase
export const db = getFirestore(app);
export const storage = getStorage(app);

