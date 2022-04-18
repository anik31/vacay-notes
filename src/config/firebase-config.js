// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxj6cy-6xJMBeBiOGN78mcwIdLN_9FgH8",
  authDomain: "vacay-notes.firebaseapp.com",
  projectId: "vacay-notes",
  storageBucket: "vacay-notes.appspot.com",
  messagingSenderId: "375951307005",
  appId: "1:375951307005:web:440da509ca309adc020e94",
  measurementId: "G-JDKDJM5MD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
