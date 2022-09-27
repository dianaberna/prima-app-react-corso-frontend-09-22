import React, { useState } from 'react';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

export default function ToDoExample (){
    const [ toDoList, setToDoList ] = useState([]);

    const handleClick = (id) => {
      let newToDoList = toDoList.map(task => {
        // cerco il task con id che ho passato come argomento e setto la variabile completata 
        // al contrario di come è ora solo quando trovo l'id
        // In questo modo sto costruendo il mio nuovo array con il task completato
        return task.id === parseInt(id) ? { ...task, complete: !task.complete } : { ...task};
      });
      setToDoList(newToDoList);
    }
  
    const addTask = (userInput) => {
      let newToDoList = [...toDoList];
      newToDoList = [...newToDoList, { id: toDoList.length + 1, task: userInput, complete: false }];
      setToDoList(newToDoList);
    }
  
    return (
      <div>
        <h1>To Do List <span>({toDoList.length})</span></h1>
        <ToDoForm addTask={addTask}/>
        <ToDoList toDoList={toDoList} handleClick={handleClick}/>
      </div>
    );
}