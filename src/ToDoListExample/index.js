import React, { useState } from 'react';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

export default function ToDoExample (){
    const [ lista, setLista ] = useState([]);

    const handleClick = (id) => {
      let newToDoList = lista.map(task => {
        // cerco il task con id che ho passato come argomento e setto la variabile completata 
        // al contrario di come è ora solo quando trovo l'id
        // In questo modo sto costruendo il mio nuovo array con il task completato
        return task.id === parseInt(id) ? { ...task, complete: !task.complete } : { ...task};
      });
      setLista(newToDoList);
    }
  
    const addTask = (task) => {
      console.log("task"+task)
      let newToDoList = [...lista];
      newToDoList = [...newToDoList, { id: lista.length + 1, task: task, complete: false }];
      setLista(newToDoList);
    }
  
    return (
      <div>
        <h1>To Do List <span>({lista.length})</span></h1>
        <ToDoForm addTask={addTask}/>
        <ToDoList lista={lista} handleClick={handleClick}/>
      </div>
    );
}