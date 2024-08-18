import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../../../firebase.config";

export const AuthProvider = createContext(null)
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // for user Register
    const createRegister = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // for user Login
    const createLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // for user Login with google
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }


    // for user manage
    useEffect(() => {
        const unSubscribes = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribes()
        }
    }, [])

    // for user Logout
    const userLogout = () => {
        setLoading(true)
        return signOut(auth)
    }

    const contextInfo = {
        createRegister,
        createLogin,
        user,
        signInWithGoogle,
        userLogout,
        loading,

    }
    return (
        <AuthProvider.Provider value={contextInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;