import { createBrowserRouter } from "react-router-dom";
import { AboutPage, ErrorPage, HomePage, LoginPage, MainApp } from ".";


export const getRoutes = () => {

    const router = createBrowserRouter ([
        {
            path:"/",
            element: <MainApp />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "/",
                    element: <HomePage/>,
                },
                {
                    path: "/login",
                    element: <LoginPage/>,
                },
                {
                    path: "/about",
                    element: <AboutPage/>,
                }
            ]
        }
    ])
    return router;
}