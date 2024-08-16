// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgCaZp6RdSQdg2yG2gdginmwS6Y1VRUxs",
    authDomain: "world-explore-d65c1.firebaseapp.com",
    projectId: "world-explore-d65c1",
    storageBucket: "world-explore-d65c1.appspot.com",
    messagingSenderId: "189142001512",
    appId: "1:189142001512:web:c9edaede6e85ef227f98dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;