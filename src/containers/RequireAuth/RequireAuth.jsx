import { useLocation, Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../../hooks";

const RequireAuth = ({allowedAccess, ...props}) => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.user_access >= allowedAccess
            ? <Outlet />
            : auth?.username
                ? <Navigate to='/unauthorized' state={{from: location}} replace />
                : <Navigate to='/login' state={{from: location}} replace />
    );
}

export default RequireAuth;