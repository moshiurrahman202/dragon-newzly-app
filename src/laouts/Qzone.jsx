import swimmingimage from "../assets/swimming.png"
import calssimage from "../assets/class.png"
import playimage from "../assets/playground.png"

const Qzone = () => {
    return (
        <div className="bg-base-200 p-3 rounded">
            <h1 className="font-bold">Qzone</h1>
            <div className="flex flex-col justify-center items-center">
                <img src={swimmingimage} alt="this is swimming image" />
                <img src={calssimage} alt="this is class image" />
                <img src={playimage} alt="this is play image" />
            </div>
        </div>
    );
};

export default Qzone;