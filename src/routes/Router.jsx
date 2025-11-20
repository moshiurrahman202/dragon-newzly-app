import { createBrowserRouter } from "react-router";
import HomeLaout from "../laouts/HomeLaout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";


const Router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLaout,
        children: [
            {
                path: "",
                Component: Home

            },
            {
                path: "/category/:id",
                Component: CategoryNews,
                loader: () => fetch("https://raw.githubusercontent.com/moshiurrahman202/Json_file_for_fetch/refs/heads/main/newzly_news.json").then(res => res.json())
            }
        ]
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