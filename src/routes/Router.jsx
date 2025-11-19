import { createBrowserRouter } from "react-router";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <h1>This is home</h1>
    },
    {
        path: "/auth",
        element: <h1>This is authentication</h1>
    },
    {
        path: "/news",
        element: <h1>This is news</h1>
    },
    {
        path: "/*",
        element: <h1>error!!!</h1>
    }
])

export default Router;