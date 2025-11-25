import { Link } from "react-router";


const UnderD = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <h1 className="font-bold">this site is under development ==>> </h1>
            <Link to="/" className="btn text-white bg-secondary py-2 px-3">Go Back To Home</Link>
        </div>
    );
};

export default UnderD;