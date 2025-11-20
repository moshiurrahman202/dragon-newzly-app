import { NavLink } from "react-router";
import user_log from "../assets/user.png"

const NavBar = () => {
    return (
        <div className="flex justify-between items-center">
            <div></div>
            <div className="nav flex gap-6">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="flex gap-3">
                <img src={user_log} alt="user logo" />
                <button className="btn btn-primary px-8">Login</button>
            </div>
        </div>
    );
};

export default NavBar;