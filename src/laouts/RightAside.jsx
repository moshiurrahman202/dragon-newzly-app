import { use } from "react";
import FindUs from "./FindUs";
import Qzone from "./Qzone";
import SocialLogin from "./SocialLogin";
import { AuthContext } from "../provider/AuthProvider";


const RightAside = () => {
    const {user} = use(AuthContext)
    return (
        <div className="space-y-5">
            {!user && <SocialLogin></SocialLogin>}
            <FindUs></FindUs>
            <Qzone></Qzone>
        </div>
    );
};

export default RightAside;