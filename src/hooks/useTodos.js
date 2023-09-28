import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodos = () => {
 
    const [todos, dispatchTodo] = useReducer(todoReducer, [], init)
    
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos) )    
        
    }, [todos])
    

    const handNewTodo = (todo) =>{
        const action = {
            type: 'Add Todo',
            payload: todo
        }

        dispatchTodo(action)
    }
    
    const handDeleteTodo = (id) =>{
        dispatchTodo({
            type: 'Remove Todo',
            payload: id
        })
    }

    const handleToggleTodo = (id) =>{
        dispatchTodo({
            type: 'Toggle Todo',
            payload: id
        })
    }
    
    

    return {
        todos,
        handNewTodo,
        handDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        todosPending: todos.filter( todo => !todo.done ).length
    }
}
