import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCD9wAq7VhfuEKn3SxHa6O1LjJcc2_HRGE",
  authDomain: "test-27f60.firebaseapp.com",
  projectId: "test-27f60",
  storageBucket: "test-27f60.appspot.com",
  messagingSenderId: "402169948450",
  appId: "1:402169948450:web:75ef32093d0778f9c19d7b",
  measurementId: "G-B5BTW0EPSF",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
