import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyBNHLaoEflpUI7MePxWPGkt9JbQ95-35PI",
  authDomain: "ichat-49f05.firebaseapp.com",
  projectId: "ichat-49f05",
  storageBucket: "ichat-49f05.appspot.com",
  messagingSenderId: "250634420130",
  appId: "1:250634420130:web:41a39cad4be0a684b53cfb",
}).auth();
