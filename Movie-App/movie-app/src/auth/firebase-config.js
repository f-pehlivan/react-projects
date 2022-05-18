import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


const firebaseConfig = {

    apiKey: "AIzaSyDVuSgG7TfcTefgKe76h0rjJ6C9nCIPHNc",
    authDomain: "movie-app-7a186.firebaseapp.com",
    projectId: "movie-app-7a186",
    storageBucket: "movie-app-7a186.appspot.com",
    messagingSenderId: "1018955988763",
    appId: "1:1018955988763:web:c5f4cd56b234b5e4855dbe"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);