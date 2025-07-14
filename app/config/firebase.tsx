import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Set up Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCijPDB6XBCVAe8OX27IPrvG8XbRGEJmZ0",
  authDomain: "zapget-35798.firebaseapp.com",
  projectId: "zapget-35798",
  storageBucket: "zapget-35798.firebasestorage.app",
  messagingSenderId: "382242566127",
  appId: "1:382242566127:web:7db1b66ad97a1f3ff8d01a"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore(app);

const storage = getStorage(app);

// Listen only for logged in state

export {
  app,
  auth,
  db,
  storage,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  browserSessionPersistence,
  setPersistence,
};
