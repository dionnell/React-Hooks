const { render, screen } = require("@testing-library/react")
const { HomePage } = require("../../src/09-useContext/HomePage")
const { UserContext } = require("../../src/09-useContext/context/UserContext")


describe('pruebas en HomePage', () => { 
    
    const user = {
        id:1,
        name: 'Dio',
    }

    test('debe de mostrar el componente son el usuario', () => { 
        
        render( 
            <UserContext.Provider value={{ user:null }}>
                <HomePage/>
            </UserContext.Provider> 
        )
        const pretag = screen.getByLabelText('pre')
        //screen.debug()
        expect(pretag.innerHTML).toBe('null')

     })

     test('debe de mostrar el componente Con el usuario', () => { 
        
        render( 
            <UserContext.Provider value={{ user }}>
                <HomePage/>
            </UserContext.Provider> 
        )
        const pretag = screen.getByLabelText('pre')
        const smalltag = screen.getByLabelText('small')

        screen.debug()
        expect(smalltag.innerHTML).toBe('Dio')
        expect(pretag.innerHTML).toContain('Dio')


     })

 })