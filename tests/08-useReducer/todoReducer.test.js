import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('todoReducer', () => { 
    
    const initialState = [{
        id: 1,
        description: 'demo todo',
        done: false
    }]

    test('debe regresar el estado inicial', () => { 
        
        const newState = todoReducer( initialState, {} )
        expect( newState ).toBe(initialState)

     })


     test('debe de agregar un todo', () => { 
        
        const action = {
            type: 'Add Todo',
            payload: {
                id: 2,
                description: 'nuevo todo #2',
                donde: false
            }
        } 
        const newState = todoReducer( initialState, action )
        expect( newState.length ).toBe(2)
        expect( newState ).toContain( action.payload )


     })

     test('debe de eliminar un todo', () => { 
        
        const action = {
            type: 'Remove Todo',
            payload:  1
            
        } 
        const newState = todoReducer( initialState, action )
        expect( newState.length ).toBe(0)


     })

     test('debe de realizar el toggle del todo', () => { 
        
        const action = {
            type: 'Toggle Todo',
            payload: 1
        } 
        const newState = todoReducer( initialState, action )
        expect( newState[0].done ).toBe(true)


     })


 })