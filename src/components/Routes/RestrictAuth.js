import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context";

export function RestrictAuth() {
    const {isLoggedIn} = useAuth();
    const location = useLocation();
    
    return isLoggedIn ? <Navigate to={ location?.state?.from?.pathname || "/home" } replace /> : <Outlet/>;
}