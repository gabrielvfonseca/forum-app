/**
 * Author: Gabriel
 * Path: ./src/firebase/config.js
 * Creation-date: 10.02.2022
 **/

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

/*
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};
*/

const firebaseConfig = {
  apiKey: "AIzaSyDGFbLc5hQ-S_Paue4de-IyFyHoV57yifM",
  authDomain: "forum-app-2aedd.firebaseapp.com",
  databaseURL:
    "https://forum-app-2aedd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "forum-app-2aedd",
  storageBucket: "forum-app-2aedd.appspot.com",
  messagingSenderId: "529143625738",
  appId: "1:529143625738:web:9cb1e9cfd2ba8dfa5207f3",
  measurementId: "G-KD5ER3Q3YC",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Init Firebase Application
console.log("Firebase service initialize! ✅");

export { db, auth };
