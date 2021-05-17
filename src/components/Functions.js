import { auth } from "../services/firebase";

export const signup = (email, password) => {
  auth.createUserWithEmailAndPassword(email, password);
};

export const login = (email, password) => {
  auth.signInWithEmailAndPassword(email, password);
};

export const signout = () => {
  auth.signOut();
};
