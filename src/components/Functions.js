import { auth } from "../services/firebase";

export const signup = (email, password) => {
  auth.createUserWithEmailAndPassword(email, password);
};

export const login = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    console.log(email, password);
  } catch (error) {
    alert(error);
  }
};

export const signout = () => {
  auth.signOut();
};
