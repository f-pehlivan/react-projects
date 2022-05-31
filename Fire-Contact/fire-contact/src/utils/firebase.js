import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyBxANkZ8bl3KvUGb4GwyeHde-78vfRi12k",
    authDomain: "fire-contact-2753c.firebaseapp.com",
    databaseURL: "https://fire-contact-2753c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fire-contact-2753c",
    storageBucket: "fire-contact-2753c.appspot.com",
    messagingSenderId: "619423482399",
    appId: "1:619423482399:web:4d8f495438bb94f85c8b2a"
};


const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;