import { Link, NavLink } from "react-router";
import user_log from "../assets/user.png"
import { use } from "react";
import { AuthContext } from "../provider/AuthProvider";


const NavBar = () => {
    const {user, logOut} = use(AuthContext)
    const handleLogOut = () => {
            logOut()
            .then(() => {
                console.log("Sign-out successful");
                
            })
            .catch(err => {
                console.log("problem with log out", err);
                
            })
    }
    
    return (
        <div className="flex justify-between items-center">
            <div className=""></div>
            <div className="nav flex gap-6 text-accent">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="flex gap-3">
                <img src={user_log} alt="user logo" />
                {user ? <buttom onClick={handleLogOut} className="btn btn-primary px-8">LogOut</buttom> : <Link to="/auth/login" className="btn btn-primary px-8">Login</Link>}
                
            </div>
        </div>
    );
};

export default NavBar;