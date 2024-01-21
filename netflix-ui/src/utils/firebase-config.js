import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBMZ_V1cI5YJkrKJnKv2O4kAKBpv10tQGQ",
  authDomain: "react-netflix-clone-4ab57.firebaseapp.com",
  projectId: "react-netflix-clone-4ab57",
  storageBucket: "react-netflix-clone-4ab57.appspot.com",
  messagingSenderId: "681578205768",
  appId: "1:681578205768:web:82dc8b748009214b903e7d",
  measurementId: "G-8WWFGL82ZP"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
