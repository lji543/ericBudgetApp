// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW_E1hPXZ58hCxfqG3t_zihMSWdWS_JUg",
  authDomain: "trackincabbage.firebaseapp.com",
  databaseURL: "https://trackincabbage-default-rtdb.firebaseio.com",
  projectId: "trackincabbage",
  storageBucket: "trackincabbage.appspot.com",
  messagingSenderId: "813141859488",
  appId: "1:813141859488:web:e4f9517e0c8f1580aabdc5",
  measurementId: "G-TFG3EMHKKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const dbRef = ref(database);
