import { useEffect } from "react";
import useLogin from "../hooks/useLogin";
import { GLog } from "./GLog";

export const Login = () => {
  useEffect(() => {
    if (window.localStorage.getItem("owner")) {
      window.location.href = "/hello";
    }
  }, []);
  const { owner, setOwner } = useLogin();
  return (
    <div className="m-auto rounded-md bg-indigo-100 text-lg font-semibold p-4 px-8">
      Login to your account
      <div>
        <GLog setOwner={setOwner} owner={owner} />
      </div>
    </div>
  );
};
