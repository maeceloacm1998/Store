
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyABC8_09TiWpMc71gOYxt5NPBSqGp4DMBw",
    authDomain: "store-9c369.firebaseapp.com",
    projectId: "store-9c369",
    storageBucket: "store-9c369.appspot.com",
    messagingSenderId: "1077805161655",
    appId: "1:1077805161655:web:f4137589781c9fc4de4132"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export default database;