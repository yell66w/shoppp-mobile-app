import * as firebase from "firebase";
import firebaseConfig from "./firebase.config";

export const initializeFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
};
