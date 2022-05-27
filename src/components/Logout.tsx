import { useEffect } from "react";
import { GoogleLogout } from "./GoogleLogout";

export const Logout = () => {
  useEffect(() => {
    if (!window.localStorage.getItem("owner")) {
      window.location.href = "/";
    }
  }, []);
  return (
    <div className="m-auto rounded-md bg-indigo-100 text-lg font-semibold p-4 px-8">
      Logout
      <div>
        <GoogleLogout />
      </div>
    </div>
  );
};
