import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../context";

export function RequireAuth() {
    const {isLoggedIn} = useAuth();
    const location = useLocation();

    return isLoggedIn ? <Outlet/> : <Navigate to="/login" state={{ from: location }} replace />;
}