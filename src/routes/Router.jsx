import { createBrowserRouter } from "react-router";
import HomeLaout from "../laouts/HomeLaout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLaout from "../laouts/AuthLaout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import UnderD from "../components/UnderD";

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
                loader: fetchData,
                hydrateFallbackElement: <div className='w-full flex justify-center items-center'><span className="loading loading-bars loading-xl"></span></div>
            }
        ]
    },
    {
        path: "auth",
        Component: AuthLaout,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                Component: Register
            }
        ]
    },
    {
        path: "/newsDetails/:id",
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        loader: fetchData,
        hydrateFallbackElement: <div className='w-full flex justify-center items-center'><span className="loading loading-bars loading-xl"></span></div>
    },
    {
        path: "career",
        Component: UnderD
    },
    {
        path: "about",
        Component: UnderD
    },
    {
        path: "/*",
        element: <h1>error!!!</h1>
    }
])

export default Router;