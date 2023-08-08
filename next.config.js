// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCwAsSKxwCoqI-ZRQgsRKUDmxk3uYkgtSU",
    authDomain: "my-app-928ee.firebaseapp.com",
    projectId: "my-app-928ee",
    storageBucket: "my-app-928ee.appspot.com",
    messagingSenderId: "956534033209",
    appId: "1:956534033209:web:d01946b7c7322de077b6e8",
    measurementId: "G-NNLPB8Y8JQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);