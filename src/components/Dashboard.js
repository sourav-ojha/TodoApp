import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import { signout } from "./Functions";
import Tasks from './Tasks';
import style from "./css/dashboard.module.css";
import { db } from "../services/firebase";

const Dashboard = () => {
  const [user, setUser] = useState({});
  const { currentUser } = useContext(AuthContext);
 
  console.log(currentUser);

  const fetchUser = async() => {
    await db.collection("Users")
       .doc(`${currentUser.email}`)
       .get()
       .then((doc) => {
         setUser(doc.data());
       });
      }
      console.log(user);

  useEffect(() => {
    if (!currentUser) {
      return <Redirect to="/login" />;
   }
    fetchUser();
  }, [currentUser]);

  if (!currentUser) {
    return <Redirect to="/login" />;
 }

  return (
    <div className={style.contain}>
      <div className={style.container1}>
        <div className={style.sidebar}>
          <div className={style.appname}>Todo App</div>
          <div className={style.username}>{user.name}</div>
          <div className={style.sidebar__container}>
            <div className={style.label}>Dashboard</div>
            <div className={style.label}>Tommorow</div>
            <div className={style.label}>This week</div>
            <div className={style.label}>All Time</div>
            <div className={style.label} id={style.signout} onClick={signout}>
              Log Out
            </div>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.header}>
            <div className={style.blank}></div>
            <div className={style.avatar}>{user.name}</div>
          </div>
          <div className={style.task_body}>
            <div className={style.span}>Dashboard</div>
            <div className={style.cards}>
              
                < Tasks user={user} />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
