// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHvcWYzyAlQEzhL5EmDTt6nc3i-T6LH4U",
  authDomain: "ema-john-with-firebase-a-391b3.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-391b3",
  storageBucket: "ema-john-with-firebase-a-391b3.appspot.com",
  messagingSenderId: "85764896088",
  appId: "1:85764896088:web:3632d835f128f88ef0212d",
  measurementId: "G-CKN1HXXBQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;