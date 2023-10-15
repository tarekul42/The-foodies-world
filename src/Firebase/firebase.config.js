// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIfc46OHXR7vLmQn51fxsNChcnVgi94oQ",
  authDomain: "the-foodies-world.firebaseapp.com",
  projectId: "the-foodies-world",
  storageBucket: "the-foodies-world.appspot.com",
  messagingSenderId: "512232507552",
  appId: "1:512232507552:web:65aa1de5d167ada9cde1c5",
  measurementId: "G-8406ML55NX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;