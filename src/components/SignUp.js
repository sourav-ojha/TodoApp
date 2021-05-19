import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { signup } from "./Functions";
import { InputGroup, FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import style from "./css/all.module.css";

const SignUp = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
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
    <div className={style.contain}>
      <div className={style.left}>
        <div className={style.left_content, style.left__desc}>
          <h2>ToDo App</h2>
          App where you can write your task
        </div>
      </div>
      <div className={style.right}>
        <form className={style.form}   onSubmit={handleSubmit} >
          <h1 className={style.head}>Sign Up</h1>
          <InputGroup className="mb-3">
            <FormControl
              type="text"
              placeholder="User-name"
              name="name"
              aria-describedby="basic-addon1"
            /></InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              type="email"
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
          <Button type='submit' variant="primary">Sign Up</Button>
          <a href='/login'>Already a user? sign-in</a>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
