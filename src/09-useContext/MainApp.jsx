import { Navigate, Route, Routes, Link } from "react-router-dom";
import { AboutPage, HomePage, LoginPage, NavBar } from "./";
import ErrorPage from "./ErrorPage";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
 
 
 
    return (
      <UserProvider>
          <NavBar/>
          <hr />
      
          <Routes>
            
            <Route path="/" element={<HomePage/>} />
            <Route path="login" element={<LoginPage/>} />
            <Route path="about" element={<AboutPage/>} />
            <Route path="/*" element={<Navigate to="/about"/>} />

          </Routes>      
      </UserProvider>
  )
}
