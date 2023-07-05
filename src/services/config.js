import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAHkBKubcEv7RT5-L37M1GJyjg4FVtGPQc",
    authDomain: "difusiontm-46d6d.firebaseapp.com",
    projectId: "difusiontm-46d6d",
    storageBucket: "difusiontm-46d6d.appspot.com",
    messagingSenderId: "1046665740966",
    appId: "1:1046665740966:web:dedf01d239f854ab0b2a67",
     
};


const app = initializeApp(firebaseConfig);

export const inventario = getFirestore(app);