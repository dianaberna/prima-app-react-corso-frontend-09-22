import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ toDoList, handleClick }) => {
    return (
        <>
            <ul>
                {toDoList.map((todo) => {
                    return (
                        <ToDo key={todo.id} todo={todo} handleClick={handleClick}/>
                    );
                })}
            </ul>
        </>
    );
};

export default ToDoList;
