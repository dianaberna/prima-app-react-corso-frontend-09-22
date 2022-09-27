import React, { useState } from 'react';

const ToDoForm = (props) => {

    const [ task, setTask ] = useState('');

    const handleChange = (e) => {
        setTask(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTask(task);
        setTask("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={task} type="text" onChange={handleChange} placeholder="Inserisci un nuovo task..."/>
            <button>Invia</button>
        </form>
    );
};

export default ToDoForm;