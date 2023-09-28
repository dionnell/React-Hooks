const { render, screen, fireEvent } = require("@testing-library/react")
const { TodoItem } = require("../../src/08-useReducer/TodoItem")

describe('pruebas en todoitem', () => { 
    
    const todo = {
        id: 1,
        description: 'Recolectar las estrellas',
        done: false
    }

    const onToggleTodoMock = jest.fn()
    const onDeleteTodoMock = jest.fn()

    beforeEach ( () => jest.clearAllMocks() )

    test('Debe Mostrar el Todo Pendiente', () => { 
        
        render (<TodoItem 
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock} 
            />)


        const liElement = screen.getByRole('listitem')
        console.log(liElement.innerHTML)

        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span')
        expect( spanElement.className ).toContain('align-self-center')
        expect( spanElement.className ).not.toContain('text-decoration-line-through')

        screen.debug()
     })

     test('Debe Mostrar el Todo Completado', () => { 
        
        todo.done = true 

        render (<TodoItem 
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock} 
            />)


        const spanElement = screen.getByLabelText('span')
        expect( spanElement.className ).toContain('text-decoration-line-through')

        screen.debug()
     })

     test('Debe de llamar el toggleTodo cuando se hace click', () => { 
        
        render (<TodoItem 
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock} 
            />)


        const spanElement = screen.getByLabelText('span')
        fireEvent.click(spanElement)
        expect( onToggleTodoMock ).toHaveBeenCalledWith(todo.id)

        //screen.debug()
     })

     test('Debe de llamar el deleteTodo cuando se hace click', () => { 
        
        render (<TodoItem 
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock} 
            />)


        const butomElement = screen.getByLabelText('delete')
        fireEvent.click(butomElement)
        expect( onDeleteTodoMock ).toHaveBeenCalledWith(todo.id)

        //screen.debug()
     })


 })