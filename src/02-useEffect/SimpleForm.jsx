import { useEffect, useState } from "react"
import { Message } from './Message'


export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'strider',
        email: 'strider@google.com'
    })

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target
        setformState({
            ...formState,
            [name]: value
        })
    }


    useEffect( () => {

    }, [formState])

  return (

    <>
        <h1> SimpleForm</h1>
        <hr />

        <input 
            type="text" 
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange={ onInputChange }
        />

        <input 
            type="email" 
            className="form-control mt-2"
            placeholder="Email"
            name="email"
            value={email}
            onChange={ onInputChange }
        />
        {
            (username === 'strider2') && <Message/>
        }
    </>
  
    )
}
