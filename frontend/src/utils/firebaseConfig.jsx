// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTWJUZrWtC1t6b-nzMjPhJ2sbUcNQeniU",
  authDomain: "kaipet-38aea.firebaseapp.com",
  projectId: "kaipet-38aea",
  storageBucket: "kaipet-38aea.appspot.com",
  messagingSenderId: "261292410887",
  appId: "1:261292410887:web:739c1c19c22189722802a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Firestore
const db = getFirestore(app);

export default db;




