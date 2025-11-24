import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut   } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../config/fireBaseConfig";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, pass) =>  {
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const logIn = (email, pass) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscride  = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser)
            setLoading(false)
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
        logIn,
        loading
    }
    return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;