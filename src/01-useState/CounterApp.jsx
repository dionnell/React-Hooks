import { useState } from "react"

export const CounterApp = () => {
  
    const [state, setcounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })
    const { counter1, counter2, counter3 } = state
  
    return (

        <>
            <h1>Counter: {counter1}</h1>
            <h1>Counter: {counter2}</h1>
            <h1>Counter: {counter3}</h1>

            <hr />
        
            <button
                className="btn" 
                onClick={ 
                    () => setcounter ({
                        ...state,
                        counter1: counter1+1,
                        
                    }) 
                    }>
                counter1 +1
            </button>
            <button
                className="btn" 
                onClick={ 
                    () => setcounter ({
                        ...state,
                        counter2: counter2+1,
                        
                    }) 
                    }>
                counter2 +1
            </button>
            <button
                className="btn" 
                onClick={ 
                    () => setcounter ({
                        ...state,
                        counter3: counter3+1,
                        
                    }) 
                    }>
                counter3 +1
            </button>
        </>
    )
}
