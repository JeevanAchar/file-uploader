import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB-JcdqyWvU4Sd4Uiv_M5UV9bwKjpbmpJM",
    authDomain: "project-store-a49c5.firebaseapp.com",
    projectId: "project-store-a49c5",
    storageBucket: "project-store-a49c5.appspot.com",
    messagingSenderId: "929664225837",
    appId: "1:929664225837:web:f908fe364d72a990ad5ea4",
    measurementId: "G-HMT5N3JSKT"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
