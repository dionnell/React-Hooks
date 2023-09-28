import { render, screen } from "@testing-library/react"
import { MainApp } from "../../src/09-useContext"
import { MemoryRouter } from "react-router-dom"

describe('Pruebas en MainApp', () => { 
    
    test('debe de mostrar el home page', () => { 
        
        render(
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
        )
        //screen.debug()
        expect( screen.getByText('HomePage') ).toBeTruthy()

     })

     test('debe de mostrar el Login page', () => { 
        
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>
        )
        //screen.debug()
        expect( screen.getByText('LoginPage') ).toBeTruthy()

     })

     test('debe de mostrar el about page cuando sea un url incorrecto', () => { 
        
        render(
            <MemoryRouter initialEntries={['/lorrgin']}>
                <MainApp/>
            </MemoryRouter>
        )
        //screen.debug()
        expect( screen.getByText('AboutPage') ).toBeTruthy()

     })

 })