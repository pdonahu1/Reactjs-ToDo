import React, {useContext, useState} from 'react'
import { TodosContext } from '../context/TodosContext'

function TodoForm() {
    const {todos, setTodos, newTodoId, setNewTodoId} = useContext(TodosContext)
    // const msg = useContext(TodosContext)
    const [todoInput, setTodoInput] = useState('')

    function handleInput(event) {
        setTodoInput(event.target.value)
    }

    function addTodo(event) {
        event.preventDefault()
    
        if(todoInput.trim().length === 0) {
            return
        }

        setTodos([
            ...todos, 
            {
                id: newTodoId,
                title: todos,
                isComplete: false
            },
        ])
    
        setNewTodoId(prevTodoId => prevTodoId + 1)

        setTodoInput('')
    }

    return (
        <form action="#" onSubmit={addTodo}>
            {/* <span>{msg}</span> */}
            <input
                type="text"
                value={todoInput}
                onChange={handleInput}
                className="todo-input"
                placeholder="What do you need to do?"
            />
        </form>
    )
}

export default TodoForm