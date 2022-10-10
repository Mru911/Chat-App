import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDEYwrWhEFnb5Va_aZAflmY8kyIFUxIi9E",
  authDomain: "chat-469f4.firebaseapp.com",
  projectId: "chat-469f4",
  storageBucket: "chat-469f4.appspot.com",
  messagingSenderId: "189475215160",
  appId: "1:189475215160:web:ef231320acf85a5c7013cd",
  measurementId: "G-NNZHQSY4R7"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const  db=getFirestore();