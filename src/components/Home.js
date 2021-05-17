import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";
import Button from 'react-bootstrap/Button'

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <h1>Home</h1>
      {currentUser ? (
        <p>
          You are logged - <Link to="/dashboard">View Dashboard</Link>
        </p>
      ) : (
        <p>
          <Link to="/login">Log In</Link> or <Link to="/signup">Sign Up</Link> 
          
  <Button variant="primary">Primary</Button>
        </p>
      )}
    </>
  );
};

export default Home;
