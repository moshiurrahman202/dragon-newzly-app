import { createBrowserRouter } from "react-router";
import HomeLaout from "../laouts/HomeLaout";


const Router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLaout
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