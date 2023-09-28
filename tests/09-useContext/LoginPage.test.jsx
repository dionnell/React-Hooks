const { render, screen, fireEvent } = require("@testing-library/react")
const { LoginPage } = require("../../src/09-useContext/LoginPage")
const { UserContext } = require("../../src/09-useContext/context/UserContext")


describe('pruebas en login page', () => { 
    
    test('debe mostrar el componente sin el usuario', () => { 
        
        render( 
            <UserContext.Provider value={{ user:null }}>
                <LoginPage/>
            </UserContext.Provider> 
        )
        const pretag = screen.getByLabelText('pre')
        expect(pretag.innerHTML).toBe('null')

     })

     test('debe de llamar el set user cuando se hace click en el boton', () => { 
        
        const setUserMock = jest.fn()
        
        render( 
            <UserContext.Provider value={{ user:null, setUser: setUserMock }}>
                <LoginPage/>
            </UserContext.Provider> 
        )

        const buttom = screen.getByRole('button')
        fireEvent.click(buttom)

        expect(setUserMock).toHaveBeenCalledWith({"email": "chingaa@email.com", "id": 123, "name": "Fernando de la torre"})

      })
 })