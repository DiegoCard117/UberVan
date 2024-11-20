import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEWEA3BZj2xUe0vODlekw7aZ09-reVwhI",
  authDomain: "uberapp-700cf.firebaseapp.com",
  projectId: "uberapp-700cf",
  storageBucket: "uberapp-700cf.firebasestorage.app",
  messagingSenderId: "28484479616",
  appId: "1:28484479616:web:04a5b5cfea5bf65028d465",
  measurementId: "G-C0JMDTMF9B",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
