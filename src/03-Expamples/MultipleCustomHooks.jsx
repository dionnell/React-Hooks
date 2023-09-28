import { useFetch, useCounter } from "../hooks"
import { LoadingPJ, RickandMortyPJ } from "./";


export const MultipleCustomHooks = () => {
  
    const {counter,increment,decrement,reset} = useCounter();
    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`)

    console.log ({ data, isLoading, hasError })
    const {name, species, image} = !!data && data

    return (
    <>
        <h1>Rick and Morty Personajes</h1>
        <hr />
        

        {
            isLoading
            ? <LoadingPJ />   
            : <RickandMortyPJ name={name}  species={species} image={image}/>
        }
        
        <button className="btn btn-primary"
            disabled={isLoading}
            onClick={increment}>
            Next PJ
        </button>

    </>
  )
}
