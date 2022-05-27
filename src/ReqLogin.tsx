import { Navigate, Outlet, useLocation } from "react-router-dom";
import useLogin from "./hooks/useLogin";

const ReqLogin = () => {
  const loc = useLocation();
  if (!window.localStorage.getItem("owner")) {
    return <Navigate to="/login" state={{ from: loc }} replace />;
  }
  return <Outlet />;
};

export default ReqLogin;
