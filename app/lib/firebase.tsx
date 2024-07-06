import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { config } from "@/configs";

const firebaseConfig = {
    apiKey: config.apiKey,
    authDomain: "bado-website-6bed9.firebaseapp.com",
    databaseURL: "https://bado-website-6bed9-default-rtdb.firebaseio.com",
    projectId: "bado-website-6bed9",
    storageBucket: "bado-website-6bed9.appspot.com",
    messagingSenderId: "719905952966",
    appId: "1:719905952966:web:4dddacd3d43c7fd9c9b3c7",
    measurementId: "G-4DDZJQSY9S"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

export const firestore = getFirestore(app);
export const storage = getStorage(app);
