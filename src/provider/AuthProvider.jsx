import { createContext } from "react";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const userInfo = {
        name: "sumon",
        age: 23
    }
    return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;