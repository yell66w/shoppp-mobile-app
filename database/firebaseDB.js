import * as firebase from "firebase";
import firebaseConfig from "./firebase.config";

let firebaseDB;

if (!firebase.apps.length) {
  console.log("initializing firebase here");
  firebaseDB = firebase.initializeApp(firebaseConfig);
} else {
  console.log("already initialized");
  firebaseDB = firebase.app();
}

export default firebaseDB;
