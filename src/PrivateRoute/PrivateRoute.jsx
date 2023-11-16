import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const location = useLocation()
   
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <div className="flex flex-col justify-center items-center h-[60vh]"><span className="loading loading-bars loading-lg"></span></div>
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default PrivateRoute; 