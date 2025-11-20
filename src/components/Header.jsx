import logo from "../assets/logo.png"
import { format } from "date-fns";

const Header = () => {
    return (
        <div className="flex flex-col items-center gap-3">
            <img className="w-[471px]" src={logo} alt="this is logo" />
            <p className="text-accent">Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;