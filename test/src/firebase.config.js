import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACRDCmr-kjyW6S9Ry63muj7jUCZt4kl0U",
  authDomain: "testop-bb310.firebaseapp.com",
  projectId: "testop-bb310",
  storageBucket: "testop-bb310.appspot.com",
  messagingSenderId: "1047476759466",
  appId: "1:1047476759466:web:16fed376cea23ba36e19d3",
  measurementId: "G-2HH8E982XS",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
