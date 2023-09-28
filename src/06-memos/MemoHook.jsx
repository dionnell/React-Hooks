import { useMemo, useState } from "react"
import { useCounter } from "../hooks"

const heavyStuff = ( iteration = 1000 ) => {

    for ( let i=0; i < iteration; i++ ){
        console.log('ahhh  again')
    }

    return `${ iteration } iteraciones realizadas `
}



export const MemoHook = () => {

    const { counter, increment } = useCounter(10)
    const [show, setShow] = useState(true)

    const memorizedVaule = useMemo( () => heavyStuff(counter), [counter] )

  return (
    <>
        <h1>counter: <small>{ counter }</small> </h1>
        <hr />
        <h4> { memorizedVaule } </h4>

        <button
            className="btn btn-primary"
            onClick={ increment }
        >
            +1
        </button>
        <button
            className="btn outline-primary"
            onClick={ () => setShow( !show ) }
        >
            Show/Hide { JSON.stringify(show) }
        </button>
    </>
  )
}
