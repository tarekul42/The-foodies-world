import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/mainLayout";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Home/Blogs/Blog/Blog";
import LoginLayout from "../Layout/LoginLayout/LoginLayout";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout />,
        children: [
            // {
            //     path: '/',
            //     element: <Navigate to='/places/1' />
            // },
            {
                path: '/',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    },
    {
        path: '/',
        element: <MainLayout/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'blog',
                element: <Blog/>
            }
        ]
    }
])

export default router;