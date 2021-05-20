import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";
import Button from 'react-bootstrap/Button'
import { signout } from "./Functions";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <h1>Home</h1>
      {currentUser ? (
        <p>
          You are logged - <Link to="/dashboard">View Dashboard</Link>
          <Button onClick={signout}>Sign out</Button>
        </p>
      ) : (
        <p>
          <Button href="/login">Log In</Button> or <Button href="/signup">Sign Up</Button> 
          
 
        </p>
      )}
    </>
  );
};

export default Home;
