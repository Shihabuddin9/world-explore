import { createBrowserRouter, } from "react-router-dom";
import Root from "../Root/Root";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";

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
        ],
    },
]);

export default router;