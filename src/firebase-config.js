import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "REACT_APP_APIKEY",
    authDomain: "REACT_APP_AUTHDOMAIN",
    projectId: "prs1-185e0",
    storageBucket: "REACT_APP_STORAGEBUCKET",
    messagingSenderId: "REACT_APP_MESSAGINGSENDERID",
    appId: "REACT_APP_APPID",
    measurementId: "REACT_APP_MEASURMENTID",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
export { db, auth };