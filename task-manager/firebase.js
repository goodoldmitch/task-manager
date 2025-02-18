// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Твои конфигурационные данные из Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyBuB7xJ_xEjNWdEg_owfPElybBK1kpci6c",
    authDomain: "task-manager-89b0a.firebaseapp.com",
    projectId: "task-manager-89b0a",
    storageBucket: "task-manager-89b0a.firebasestorage.app",
    messagingSenderId: "775450132548",
    appId: "1:775450132548:web:3ec3969608a55268d9bc11"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
