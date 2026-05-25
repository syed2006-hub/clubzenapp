import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: "wings-of-ams.firebaseapp.com",
  projectId: "wings-of-ams",
  storageBucket: "wings-of-ams.appspot.com",
  messagingSenderId: "833904974652",
  appId: "1:833904974652:web:c563f84bda3412f9ee5c39",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);