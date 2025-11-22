import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../config/fireBaseConfig";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const createUser = (email, pass) =>  {
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const userInfo = {
        createUser
    }
    return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;