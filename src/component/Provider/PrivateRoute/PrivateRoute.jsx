import { useContext } from "react";
import { AuthProvider } from "../AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthProvider)
    const location = useLocation()


    if (loading) {
        return <div className="flex justify-center items-center mt-20"><span className="loading loading-bars loading-lg"></span></div>
    }
    if (user) {
        return children;
    } else {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
};

export default PrivateRoute;