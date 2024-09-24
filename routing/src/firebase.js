import { initializeApp } from "firebase/app";

import {getFirestore} from "@firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBFDnGJ9_QqGfETvJkQ35n_yJVZ5w0JdS4",
  authDomain: "devdeakinapp.firebaseapp.com",
  projectId: "devdeakinapp",
  storageBucket: "devdeakinapp.appspot.com",
  messagingSenderId: "491384165440",
  appId: "1:491384165440:web:0f481991325c24621efba5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
