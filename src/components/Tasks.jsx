import React, { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import style from "./css/dashboard.module.css";
import Task from "./Task";

const Tasks = ({ user }) => {
  const [tasks, setTasks] = useState([]);
  const [load, setload] = useState(true);

  let today = new Date();
  let todayDate = today.toString();

  const [todo, setTodo] = useState({
    head: "",
    content: "",
    date_created: todayDate,
  });

  useEffect(() => {
    console.log("load", load);
    if (load) {
      setTasks([]);
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
  }, [user, load]);

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    await db
      .collection("Users")
      .doc(`${user.email}`)
      .collection("tasks")
      .doc(`${todo.head}`)
      .set({
        head: todo.head,
        content: todo.content,
        date_created: todo.date_created,
      });
    alert("success");
    setTodo({
      head: "",
      content: "",
      date_created: todayDate,
    });
    setload(true);
  };

  return (
    <>
      <div className={style.card}>
        <InputGroup>
          <FormControl
            type="text"
            name="head"
            placeholder='Heading'
            value={todo.head}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <FormControl
            type="text"
            name="date_created"
            value={todo.date_created}
            onChange={handleChange}
            disabled
          />
        </InputGroup>
        <InputGroup>
          <FormControl
            as="textarea"
            name="content"
            placeholder='content/text'
            value={todo.content}
            onChange={handleChange}
          />
        </InputGroup>
        <Button variant="primary" onClick={handleSubmit}>
          ADD
        </Button>
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
