import { act, renderHook } from "@testing-library/react"
import { useFrom } from "../../src/hooks/useFrom"


describe('Pruebas useForm', () => { 
    
    const initialForm = {
        name: ' juas juas',
        email: 'jaaa@gmail.com'
    }

    test('debe de regresar los valores por defecto', () => { 
        const { result } = renderHook( () => useFrom(initialForm) )
        expect (result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        })
    
    }) 

    test('debe de cambiar el nombre del formulario', () => { 
        const newValue= 'Alekondra'
        const { result } = renderHook( () => useFrom(initialForm) )
        const {onInputChange} = result.current

        act( () => {
            onInputChange({target: {name: 'name', value: newValue} })
        } )

        expect( result.current.name ).toBe( newValue )
        expect( result.current.formState.name ).toBe( newValue )

    })
    
    test('debe de resetear el formulario', () => { 
        const newValue= 'Alekondra'
        const { result } = renderHook( () => useFrom(initialForm) )
        const {onInputChange, onResetForm} = result.current

        act( () => {
            onInputChange({target: {name: 'name', value: newValue} })
            onResetForm()
        } )

        expect( result.current.name ).toBe( initialForm.name )
        expect( result.current.formState.name ).toBe( initialForm.name )

    })
})