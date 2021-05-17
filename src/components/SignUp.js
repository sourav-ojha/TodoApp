import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { signup } from "./Functions";
import {  InputGroup, FormControl } from  'react-bootstrap'
import Button from 'react-bootstrap/Button'
import "../components/css/all.css";

const SignUp = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      signup(email.value, password.value);
      setCurrentUser(true);
    } catch (error) {
      alert(error);
    }
  };
  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="contain">
      <div className="left">
        <div className='left_content form'>
          <h2>ToDo App</h2>
          App where you can write your task 
        </div>
      </div>
      <div className="right">
        <form className="form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <InputGroup className="mb-3">
    <FormControl
    type='email'
      placeholder="User-Email"
      name="email"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
  <InputGroup className="mb-3">
        <FormControl
        type="password"
      placeholder="Password"
      name="password"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
  <Button variant="primary">Primary</Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;