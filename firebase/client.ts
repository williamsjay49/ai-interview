// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAHSJPD4E4kT31GTRGrR2sMMvxHlyCl-I",
  authDomain: "ai-mock-ad7b8.firebaseapp.com",
  projectId: "ai-mock-ad7b8",
  storageBucket: "ai-mock-ad7b8.firebasestorage.app",
  messagingSenderId: "376760353101",
  appId: "1:376760353101:web:fadfbdfcc2054e44eaf704",
  measurementId: "G-Y72KDM87TR",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
