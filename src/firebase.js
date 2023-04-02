// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqp3YsvfslqwkDMyw8D2dohmMN7EzUIYo",
  authDomain: "itd108.firebaseapp.com",
  projectId: "itd108",
  storageBucket: "itd108.appspot.com",
  messagingSenderId: "356626493858",
  appId: "1:356626493858:web:79bb400b2735a9199002fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
