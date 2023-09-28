const { render, screen } = require("@testing-library/react")
const { TodoApp } = require("../../src/08-useReducer")
const { useTodos } = require("../../src/hooks/useTodos")

jest.mock('../../src/hooks/useTodos')

describe('TodoApp', () => { 
    
    useTodos.mockReturnValue({
        todos: [
            {id: 1, description: 'ahhh 1', done:false},
            {id: 2, description: 'ahhh 2', done:false},
        ],
        handNewTodo: 2,
        handDeleteTodo: 1,
        handleToggleTodo: jest.fn(),
        todosCount: jest.fn(),
        todosPending: jest.fn()
    })


    test('debe de mostrar el componente correctamente', () => { 
        
        render(<TodoApp/>)
        //screen.debug()

        expect( screen.getByText('ahhh 1') ).toBeTruthy()
        expect( screen.getByText('ahhh 2') ).toBeTruthy()
        expect( screen.getByRole('textbox') ).toBeTruthy()

     })

 })