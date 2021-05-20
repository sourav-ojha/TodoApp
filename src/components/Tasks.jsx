import React, { useEffect, useState } from "react";
import { db } from "../services/firebase";
import style from "./css/dashboard.module.css";
import InputTask from "./InputTask";
import Task from "./Task";

const Tasks = ({ user }) => {
  // const [task, setTask] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [load, setload] = useState(true);

  useEffect(() => {
    if (load) {
      db.collection("Users")
        .doc(`${user.email}`)
        .collection("tasks")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((docs) =>
            setTasks((tasks) => [...tasks, docs.data()])
          );
        });
    }
    return () => {
      setload(false);
    };
  }, [user]);

  return (
    <>
      <div className={style.card}>
        <InputTask user={user} load={load} />
      </div>
      {tasks.length
        ? tasks.map((task) => (
            <div className={style.card}>
              <Task todo={task} />
            </div>
          ))
        : null}
    </>
  );
};

export default Tasks;
