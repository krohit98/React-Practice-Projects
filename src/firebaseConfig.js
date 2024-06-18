import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDuGruDfz11NFikD6rxVdRLqh22mGkAs-c",
  authDomain: "react-practice-projects-e3a88.firebaseapp.com",
  projectId: "react-practice-projects-e3a88",
  storageBucket: "react-practice-projects-e3a88.appspot.com",
  messagingSenderId: "907238344862",
  appId: "1:907238344862:web:32d6b479f819f8a3c2d38f",
  measurementId: "G-DQ12K3D60T"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);