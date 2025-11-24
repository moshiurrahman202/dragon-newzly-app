import { createBrowserRouter } from "react-router";
import HomeLaout from "../laouts/HomeLaout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLaout from "../laouts/AuthLaout";
import NewsDetail from "../pages/NewsDetails";
import NewsDetails from "../pages/NewsDetails";

const fetchData = () => fetch("https://raw.githubusercontent.com/moshiurrahman202/Json_file_for_fetch/refs/heads/main/newzly_news.json").then(res => res.json());
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
                path: "category/:id",
                Component: CategoryNews,
                loader: fetchData
            }
        ]
    },
    {
        path: "auth",
        Component: AuthLaout,
        children: [
            {
                path: "/auth/login",
                Component: Login
            },
            {
                path: "/auth/register",
                Component: Register
            }
        ]
    },
    {
        path: "/newsDetails/:id",
        Component: NewsDetails,
        loader: fetchData
    },
    {
        path: "/*",
        element: <h1>error!!!</h1>
    }
])

export default Router;