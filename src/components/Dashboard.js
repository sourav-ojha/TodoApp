import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import { signout } from "./Functions";
import { Button } from "react-bootstrap";
import style from "./css/dashboard.module.css";

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  return (
<div className={style.contain}>
      <div className={style.container1}>
        <div className={style.sidebar}>
          <div className={style.appname}>Todo App</div>
          <div className={style.username}>User name</div>
          <div className={style.sidebar__container}>
            <div className={style.label}>Dashboard</div>
            <div className={style.label}>Tommorow</div>
            <div className={style.label}>This week</div>
            <div className={style.label}>All Time</div>
            <div className={style.label} id={style.signout} onClick={signout}>Log Out</div>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.header}>
            <div className={style.blank}></div>
            <div className={style.avatar}>avatar</div>
          </div>
          <div className={style.task_body}>
            <div className={style.span}>Dashboard</div>
            <div className={style.cards}>
              <div className={style.card}>hii1</div>
              <div className={style.card}>hii1</div>
              <div className={style.card}>hii1</div>
              <div className={style.card}>hii1</div>
              <div className={style.card}>hii1</div>
              <div className={style.card}>hii1</div>
              <div className={style.card}>hii1</div>
              <div className={style.card}>hii1</div>
              <div className={style.card}>hii1</div>
              <div className={style.card}>hii1</div>
              
            </div>
          </div>
        </div>
      </div>
    </div>


      );
};

export default Dashboard;
