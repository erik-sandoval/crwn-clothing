import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBOo604hA1UZ4qgjLstnHJlgVPgvhAAZXE",
  authDomain: "crown-db-1e3dc.firebaseapp.com",
  databaseURL: "https://crown-db-1e3dc.firebaseio.com",
  projectId: "crown-db-1e3dc",
  storageBucket: "crown-db-1e3dc.appspot.com",
  messagingSenderId: "450105016155",
  appId: "1:450105016155:web:e043f6d46b47ae5edc247e",
  measurementId: "G-KZM3S92XY0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;