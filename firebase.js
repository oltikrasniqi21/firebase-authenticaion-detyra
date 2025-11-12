// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpzIn48kyTowKjqyByFyJy78XPok7Jqmk",
  authDomain: "bonusdetyra-345fa.firebaseapp.com",
  projectId: "bonusdetyra-345fa",
  storageBucket: "bonusdetyra-345fa.firebasestorage.app",
  messagingSenderId: "251230976026",
  appId: "1:251230976026:web:05977b612ef3d3a538f9a3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
