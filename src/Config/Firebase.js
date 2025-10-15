import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvFeOY_Q0akufO9_8m-SlRvRQayOikCxE",
  authDomain: "chat-app-2c291.firebaseapp.com",
  projectId: "chat-app-2c291",
  storageBucket: "chat-app-2c291.firebasestorage.app",
  messagingSenderId: "63752150275",
  appId: "1:63752150275:web:5994a570ad2790f198dd36"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword

}