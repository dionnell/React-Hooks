import { TodoAdd, TodoList, useTodos } from "./";



export const TodoApp = () => {
  
    const {todos,handDeleteTodo, handNewTodo, handleToggleTodo, todosCount, todosPending} = useTodos()

    return (
    <>
        <h1>TodoApp: { todosCount } - <small>Pendientes: { todosPending }</small> </h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList 
                    todos={todos} 
                    onDeleteTodo={ handDeleteTodo } 
                    onToggleTodo={ handleToggleTodo }
                />
            </div>

            <div className="col-5">
                <h4>Agragar TODO</h4>
                <hr />
                <TodoAdd onNewTodo={handNewTodo} />
            </div>

        </div>
        
    
    
    </>
  )
}
