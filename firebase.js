import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBMlzyQsiSaIoya2K_NrvBHImKoHUCc3K8",
  authDomain: "petrol-ebd3f.firebaseapp.com",
  projectId: "petrol-ebd3f",
  storageBucket: "petrol-ebd3f.appspot.com",
  messagingSenderId: "165983912332",
  appId: "1:165983912332:web:5f99093d497d6c4b9656a9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);