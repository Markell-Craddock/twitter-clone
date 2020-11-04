import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBh9ELlY6bZNLtrNcoqcQoC9i9AHFoeSB4",
  authDomain: "markellc-twitter-clone.firebaseapp.com",
  databaseURL: "https://markellc-twitter-clone.firebaseio.com",
  projectId: "markellc-twitter-clone",
  storageBucket: "markellc-twitter-clone.appspot.com",
  messagingSenderId: "57236262903",
  appId: "1:57236262903:web:b9b1a66b3f9d17a21728f2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
