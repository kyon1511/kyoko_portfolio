// src/lib/firebase.ts

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD0LHSNijnTzty27g73-Uv8o6KESTftA8k",
  authDomain:"portfolio-83138.firebaseapp.com",
  projectId: "portfolio-83138",
  storageBucket: "portfolio-83138.firebasestorage.app",
  messagingSenderId: "677130626079",
  appId: "1:677130626079:web:bc387d5dbf5af0b09d212a",
  measurementId: "G-N9VQ753ELV"
  
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
