import { useState } from "react"
import { UserContext } from "./UserContext"

//const user = {
//    id:123,
//    name:'Fernando de la torre',
//    email:'chingaa@email.com'
//}


export const UserProvider = ({ children }) => {

  const [user, setUser] = useState()

  return (
    //<UserContext.Provider value={{hola: 'numdo', user}} >
    <UserContext.Provider value={{ user, setUser }} >
        {children}
    </UserContext.Provider>
  )
}
