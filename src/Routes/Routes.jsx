import { createBrowserRouter } from "react-router-dom";
// import Footer from "../Shared/Footer/Footer";
import MainLayout from "../Layout/MainLayout/mainLayout";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Home/Blogs/Blog/Blog";

const router = createBrowserRouter([
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