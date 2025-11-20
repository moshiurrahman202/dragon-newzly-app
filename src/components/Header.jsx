import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="flex flex-col items-center gap-3">
            <img className="w-[471px]" src={logo} alt="this is logo" />
            <p className="text-gray-500">Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Header;