import { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../../../firebase.config";

export const AuthProvider = createContext(null)
const auth = getAuth(app);

const AuthContext = ({ children }) => {

    const createRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const contextInfo = {
        createRegister
    }
    return (
        <AuthProvider.Provider value={contextInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;