import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/mainLayout";
import Home from "../Pages/Home/Home/Home/Home";
import Blog from "../Pages/Home/Blogs/Blog/Blog";
import LoginLayout from "../Layout/LoginLayout/LoginLayout";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Profile from "../Pages/Profile/Profile";
import Chefs from "../Pages/Home/Chefs/Chefs/Chefs";
import Recipes from "../Pages/Home/Recipes/Recipes/Recipes";
import ChefProvider from "../Providers/ChefProvider";

const router = createBrowserRouter([
    /* {
        path: '/',
        element: <LoginLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to='/places/1' />
            },
            {
                path: '/',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    }, */
    {
        path: '/',
        element: <MainLayout/>,
        children:[
            {
                path: '/',
                element: <ChefProvider><Home/></ChefProvider>
            },
            {
                path: 'blog',
                element: <Blog/>
            },
            {
                path: 'chefs',
                element: <ChefProvider><Chefs/></ChefProvider>
            },
            {
                path: 'recipes',
                element: <ChefProvider><Recipes/></ChefProvider>
            },
            {
                path: 'profile',
                element: <Profile/>
            }
        ]
    }
])

export default router;