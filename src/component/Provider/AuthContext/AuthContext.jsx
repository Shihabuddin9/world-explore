import { createContext } from "react";

const AuthProvider = createContext(null)

const AuthContext = ({ children }) => {

    const contextInfo = {

    }
    return (
        <AuthProvider.Provider value={contextInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;