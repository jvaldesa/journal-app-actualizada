// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7I7qSgmGKUjvdeDC0pSSg_L0N6L-MyvI",
  authDomain: "journal-app-curso-26f13.firebaseapp.com",
  projectId: "journal-app-curso-26f13",
  storageBucket: "journal-app-curso-26f13.appspot.com",
  messagingSenderId: "413077700457",
  appId: "1:413077700457:web:c5f2e065cab5679aed47f8"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)

