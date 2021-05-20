import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import { login } from "./Functions";
// import { db } from "../services/firebase";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import style from "./css/all.module.css";
import "./css/all.module.css";

const LogIn = () => {
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredential({
      ...credential,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      login(credential.email, credential.password);
  };
  const { currentUser } = useContext(AuthContext);
  console.log("entered1", currentUser);
  if (currentUser) {
    console.log("entered2", currentUser);
    return <Redirect to="/dashboard" />;
  }
  return (
    <>
      <div className={style.contain}>
        <div className={style.left}>
          <div className={(style.left_content, style.left__desc)}>
            <h2>ToDo App</h2>
            App where you can write your task
          </div>
        </div>
        <div className={style.right}>
          <form className={style.form} onSubmit={handleSubmit}>
            <h1 className={style.head}>Sign In</h1>

            <InputGroup className="mb-3">
              <FormControl
                type="email"
                placeholder="User-Email"
                name="email"
                onChange={handleChange}
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <Button type="submit" variant="primary">
              Sign In
            </Button>
            <a href="/signup">Not a user? signup </a>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
