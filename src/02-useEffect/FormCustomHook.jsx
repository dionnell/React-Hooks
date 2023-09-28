import { useEffect } from "react"
import { useFrom } from "../hooks/useFrom"


export const FormCustomHook = () => {

    const {formState, onInputChange, username, email, password, onResetForm} = useFrom({
        username: '',
        email: '',
        password: ''
    })

    //const { username, email, password } = formState

  
  return (

    <>
        <h1> SimpleForm con Custom Hook</h1>
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
        <input 
            type="password" 
            className="form-control mt-2"
            placeholder="Contraseña"
            name="password"
            value={password}
            onChange={ onInputChange }
        />

        <br />
        <button className="btn btn-primary" 
           onClick={onResetForm} >Reset</button>
    </>
  
    )
}
