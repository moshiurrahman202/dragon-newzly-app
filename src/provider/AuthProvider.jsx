import { createUserWithEmailAndPassword, onAuthStateChanged  } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../config/fireBaseConfig";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const createUser = (email, pass) =>  {
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    useEffect(() => {
        const unsubscride  = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser)
        });
        return () => {
            unsubscride()
        }
    },[])
    console.log("this is from provider", user);
    
    const userInfo = {
        createUser
    }
    return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;