// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBh2EPxuRKJBWMHpAZ1KNAU3LNn21gkf8A",
  authDomain: "e-clone-de6be.firebaseapp.com",
  projectId: "e-clone-de6be",
  storageBucket: "e-clone-de6be.appspot.com",
  messagingSenderId: "1061761904581",
  appId: "1:1061761904581:web:b816adc35fe99f7dc225ac",
  measurementId: "G-WPJXJ36EVL",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
