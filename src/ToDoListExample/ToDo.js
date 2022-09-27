import React from 'react';
import "./todo.css"

const ToDo = ({todo, handleClick}) => {

    const handleClickLocal = (e) => {
        e.preventDefault()
        handleClick(e.currentTarget.id)
    }

    return (
        <li id={todo.id} key={todo.id} value={todo.id} onClick={handleClickLocal} className={todo.complete ? "todo completed" : "todo"}>
            {todo.task}
        </li>
    );
};

export default ToDo;