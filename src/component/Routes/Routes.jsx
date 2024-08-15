import { createBrowserRouter, } from "react-router-dom";
import Root from "../Root/Root";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Register from "../Shared/Register/Register";
import Login from "../Shared/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
        ],
    },
]);

export default router;