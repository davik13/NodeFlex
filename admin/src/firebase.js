// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUTsbV9MYJQw-UbHbYUrnoVxv-tFhfV9A",
  authDomain: "nodeflex-3f472.firebaseapp.com",
  projectId: "nodeflex-3f472",
  storageBucket: "nodeflex-3f472.appspot.com",
  messagingSenderId: "387633901840",
  appId: "1:387633901840:web:aeeffbaa902ef17a3b3595",
  measurementId: "G-WV4DNZH8JE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);