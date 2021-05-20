import React, { useState } from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'
import { db } from '../services/firebase';
import firebase from 'firebase';

const InputTask = ({user, load}) =>  {

    const [todo, setTodo] = useState({
        head: '',
        content: '',
        date_created:  firebase.firestore.FieldValue.serverTimestamp(),
        due_date: '',
    });

    const handleChange = (e) => {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        db.collection('Users').doc(`${user.email}`).collection('tasks').doc(`${todo.head}`).set({
            content: todo.content,
            date_created:  todo.date_created,
            due_date: todo.due_date
        });
        setTodo({
            head: '',
            content: '',
            date_created:  firebase.firestore.FieldValue.serverTimestamp(),
            due_date: '',
        })
        
    }


    return (
        <>
            <InputGroup>
                <FormControl
                type='text'
                name='head'
                value={todo.head}
                onChange={handleChange}
                />
            </InputGroup>
            <InputGroup>
                <FormControl
                type='date'
                name='date_created'
                value={todo.date_created}
                onChange={handleChange}
                disabled
                />
            </InputGroup>
            <InputGroup>
                <FormControl
                type='date'
                name='due_date'
                value={todo.due_date}
                onChange={handleChange}
                />
            </InputGroup>
            <InputGroup>
                <FormControl
                as="textarea"
                name='content'
                value={todo.content}
                onChange={handleChange}
                />
            </InputGroup>
            <Button variant='primary' onClick={handleSubmit} >ADD</Button>
        </>
    )
}

export default InputTask;
