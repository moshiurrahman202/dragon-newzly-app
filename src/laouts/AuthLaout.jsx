import { Outlet } from "react-router";
import NavBar from "../components/NavBar";


const AuthLaout = () => {
    return (
        <div className="bg-base-200 min-h-screen">
            <header className="w-11/12 mx-auto py-5">
                <NavBar></NavBar>
            </header>
            <main className="w-11/12 mx-auto py-5"><p>outlet</p><Outlet></Outlet></main>
            
        </div>
    );
};

export default AuthLaout;