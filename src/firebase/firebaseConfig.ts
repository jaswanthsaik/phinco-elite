import { initializeApp } from "firebase/app";

import {
 getFirestore
} from "firebase/firestore";


import {
 getStorage
} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCT3OZnqOoVx1PABD4pZgBXcII4zt41ELM",
  authDomain: "blogs-cf4d2.firebaseapp.com",
  projectId: "blogs-cf4d2",
  storageBucket: "blogs-cf4d2.firebasestorage.app",
  messagingSenderId: "794798878739",
  appId: "1:794798878739:web:eaba308802fd38d11b8fe6",
  measurementId: "G-RPYNSHBZV9"
};


const app = initializeApp(firebaseConfig);


export const db =
getFirestore(app);


export const storage =
getStorage(app);