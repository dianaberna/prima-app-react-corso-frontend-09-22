import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({ lista, handleClick }) => {
  return (
    <>
      <ul>
        {lista.map((todo) => {
          return <ToDo key={todo.id} todo={todo} handleClick={handleClick} />
        })}
      </ul>
    </>
  )
}

export default ToDoList
