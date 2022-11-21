import React, { useState } from 'react'

const ToDoForm = (props) => {
  const [task, setTask] = useState('')

  const handleChange = (e) => {
    setTask(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addTask(task)
    setTask('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Inserisci nuovo task: </label>
      <input
        value={task}
        id="task"
        type="text"
        onChange={handleChange}
        placeholder="Inserisci un nuovo task..."
      />
      <button>Invia</button>
    </form>
  )
}

export default ToDoForm
