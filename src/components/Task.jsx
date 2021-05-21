import React from 'react'

import { InputGroup, FormControl} from 'react-bootstrap'

function Task({ todo }) {
    return (
        <>
        <InputGroup>
        <FormControl
        type='text'
        name='head'
        value={todo.head}
        disabled
        />
    </InputGroup>
    <InputGroup>
        <FormControl
        type='date'
        name='date_created'
        value={todo.date_created}
        disabled
        />
    </InputGroup>
    
   
    <InputGroup>
        <FormControl
        as="textarea"
        name='content'
        value={todo.content}
        disabled
        />
    </InputGroup>
        </>
    )
}

export default Task
