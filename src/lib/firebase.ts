// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,

} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkwlUFsShcNvCeFiE6LNydS4aErzlv5vo",
  authDomain: "onestep-21a6c.firebaseapp.com",
  projectId: "onestep-21a6c",
  storageBucket: "onestep-21a6c.firebasestorage.app",
  messagingSenderId: "543694476515",
  appId: "1:543694476515:web:c979516cb7350ee56d61d6",
  measurementId: "G-V2G4WYQN3L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider =
  new GoogleAuthProvider();