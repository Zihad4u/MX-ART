import { useContext } from "react";
import { AutoContext } from "../Components/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AutoContext)
    // const location=useLocation();
    // console.log(location);
    if (!loading) {
        if (user) {
            return children
        }
        return <Navigate to="/login" ></Navigate>
    }

};

export default PrivateRoute;