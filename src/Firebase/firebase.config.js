// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEOAoHRqkR5mPWToOa_ME4XotEi_BULYI",
  authDomain: "sushi-fushi.firebaseapp.com",
  projectId: "sushi-fushi",
  storageBucket: "sushi-fushi.appspot.com",
  messagingSenderId: "565730687384",
  appId: "1:565730687384:web:3efddd1cf66c179e9a93ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;