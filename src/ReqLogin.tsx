import { Navigate, Outlet, useLocation } from "react-router-dom";
import useLogin from "./hooks/useLogin";

const ReqLogin = () => {
  const loc = useLocation();
  if (!useLogin().user) {
    return <Navigate to="/login" state={{ from: loc }} replace />;
  }
  return <Outlet />;
};

export default ReqLogin;
