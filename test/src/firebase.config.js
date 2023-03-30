import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3JPdfoISO9EiH43_DRK3NBWl6YV_Beyc",
  authDomain: "test-a966c.firebaseapp.com",
  projectId: "test-a966c",
  storageBucket: "test-a966c.appspot.com",
  messagingSenderId: "634048239253",
  appId: "1:634048239253:web:25512be3e3b930db9bad9c",
  measurementId: "G-LMH21L0XX6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
