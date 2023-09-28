import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-Expamples/MultipleCustomHooks"
import { useFetch } from "../../src/hooks/useFetch"
import { useCounter } from "../../src/hooks/useCounter"

jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')


describe('pruebas en MultipleCustomHooks', () => {  

    const mockIncrement = jest.fn()
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })

    beforeEach( () => {
        jest.clearAllMocks()
    } )

    test('debe mostrar el componente por defecto', () => { 
        
        useFetch.mockReturnValue({
            data: null, 
            isLoading: true, 
            hasError: null
        })

        render(<MultipleCustomHooks/>)

        expect ( screen.getByText('Loading...') )
        expect ( screen.getByText('Rick and Morty Personajes') )

        const nextButtom = screen.getByRole('button', { name: 'Next PJ' })
        expect( nextButtom.disabled ).toBeTruthy()

        screen.debug()

     })

     test('debe mostrar un pj', () => { 
        useFetch.mockReturnValue({
            data: {name: 'morti', species: 'human', image: 'www.RandM.png'}, 
            isLoading: false, 
            hasError: null
        })
        
        render(<MultipleCustomHooks/>)
        screen.debug()
        expect( screen.getByText('morti') )

      })

      test('debe llamar la funcion de incrementar', () => { 
        
        useFetch.mockReturnValue({
            data: {name: 'morti', species: 'human', image: 'www.RandM.png'}, 
            isLoading: false, 
            hasError: null
        })
        
        render(<MultipleCustomHooks/>)
        const nextButtom = screen.getByRole('button', { name: 'Next PJ' })
        fireEvent.click(nextButtom)

        expect(mockIncrement).toHaveBeenCalled()

       })

})