// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9Gay67QHhEs7pdevDovP4GCdfn1Z_1l0",
  authDomain: "seoul-kitchenista-85122.firebaseapp.com",
  projectId: "seoul-kitchenista-85122",
  storageBucket: "seoul-kitchenista-85122.appspot.com",
  messagingSenderId: "479755071353",
  appId: "1:479755071353:web:db84dab31aafbba35e09a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;