import { useContext } from "react";
import { LoginCtx } from "../context/LoginCtx";

const useLogin = () => {
  return useContext(LoginCtx);
};

export default useLogin;
