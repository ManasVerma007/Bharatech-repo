import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkxjcALXlSYr6l-GJVYu0cpYaEmastM8Y",
  authDomain: "landingpage-978c9.firebaseapp.com",
  projectId: "landingpage-978c9",
  storageBucket: "landingpage-978c9.appspot.com",
  messagingSenderId: "906667040131",
  appId: "1:906667040131:web:df2c3b31fc6d2dc1c5eab6",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
