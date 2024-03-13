import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGCemcA4ITihOvewuLQhwALOfnGbUKIOM",
  authDomain: "clone-fed6f.firebaseapp.com",
  projectId: "clone-fed6f",
  storageBucket: "clone-fed6f.appspot.com",
  messagingSenderId: "199486989270",
  appId: "1:199486989270:web:98b2bfed7fb533eda6fa77",
  measurementId: "G-79SCSWB484"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };