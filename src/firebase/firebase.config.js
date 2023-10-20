// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ4alL28HNUjPl-_EwIYg8kwPHQ7Gec74",
  authDomain: "techvine-3c37f.firebaseapp.com",
  projectId: "techvine-3c37f",
  storageBucket: "techvine-3c37f.appspot.com",
  messagingSenderId: "501578677593",
  appId: "1:501578677593:web:697e83fc2a80e1faf3e048"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app