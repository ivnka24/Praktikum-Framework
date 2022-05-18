import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDo7xsflwjNasQqW_jaPFTCkiKx58Mp8N4",
    authDomain: "praktikum11-ccd20.firebaseapp.com",
    projectId: "praktikum11-ccd20",
    storageBucket: "praktikum11-ccd20.appspot.com",
    messagingSenderId: "201152436338",
    appId: "1:201152436338:web:afe32e810db783e947caeb",
    measurementId: "G-0F5G0LGWF5"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;