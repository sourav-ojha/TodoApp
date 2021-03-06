import firebase from "firebase";
import { Config } from "../config/keys";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp( Config );

export const auth = firebaseApp.auth();
export const db = firebaseApp.firestore();
export const storage = firebase.storage();