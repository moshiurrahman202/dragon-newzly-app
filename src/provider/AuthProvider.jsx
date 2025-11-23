import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut   } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../config/fireBaseConfig";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const createUser = (email, pass) =>  {
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const logIn = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }
    const logOut = () => {
        return signOut(auth)
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
        user,
        createUser,
        logOut,
        logIn
    }
    return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;