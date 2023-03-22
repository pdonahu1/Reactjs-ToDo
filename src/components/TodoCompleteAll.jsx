import React, { useContext } from 'react'
import { TodosContext } from '../context/TodosContext'

function TodoCompleteAll() {
  const {todos, setTodos} = useContext(TodosContext)

  function completeAllTodos() {
    let updatedTodos
    if (todos.filter(todo => !todo.isComplete).length === 0) {
      updatedTodos = todos.map(todo => {
        todo.isComplete = false
        return todo
      })
    } else {
      updatedTodos = todos.map(todo => {
        todo.isComplete = true
        return todo
      })
    }

    setTodos(updatedTodos)
  }

  return (
    <div>
        <div onClick={completeAllTodos} className="button">Check All</div>
    </div>
  )
}

export default TodoCompleteAll