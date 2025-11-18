import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8ua7xxmRzuBtwYX9Lc2OThVhBwa8XuFo",
  authDomain: "admin-test-8b79d.firebaseapp.com",
  projectId: "admin-test-8b79d",
  storageBucket: "admin-test-8b79d.firebasestorage.app",
  messagingSenderId: "974056209508",
  appId: "1:974056209508:web:6e1a9b582ea9921a60f371"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);