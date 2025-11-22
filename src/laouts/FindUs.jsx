import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const FindUs = () => {
    return (
        <div>
            <h1 className="font-bold">Find Us on</h1>
            <div className="join join-vertical w-full justify-start">
  <button className="btn bg-white join-item justify-start"><FaFacebook></FaFacebook> Facebook</button>
  <button className="btn bg-white join-item justify-start"><FaTwitter></FaTwitter>  Twitter</button>
  <button className="btn bg-white join-item justify-start"><FaInstagram></FaInstagram> Instagram</button>
</div>
        </div>
    );
};

export default FindUs;