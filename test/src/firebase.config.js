import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1sSBEH9JJAAcTpnsnnLy-0cfXYqk1fOA",
  authDomain: "test-755f6.firebaseapp.com",
  projectId: "test-755f6",
  storageBucket: "test-755f6.appspot.com",
  messagingSenderId: "726125896489",
  appId: "1:726125896489:web:b0a145033223cf986a0d38",
  measurementId: "G-NF044NND05",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
