import React, { useEffect, useState } from "react";
import { auth } from "../services/firebase.js";

export const AuthContext = React.createContext();

export const AuthProvider = (props) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  // console.log(children);
  return (
    <AuthContext.Provider value={{ currentUser }}>
   
      {props.children}
  
    </AuthContext.Provider>
  );
};