import { createContext, useState, useMemo, useEffect } from "react";

const LoginCtx = createContext<any>(null!);

export const LoginProvider = ({ children }: { children: React.ReactNode }) => {
  const [owner, setOwner] = useState<any>(null);

  const value = useMemo(
    () => ({
      owner,
      setOwner,
    }),
    [owner, setOwner]
  );
  useEffect(() => {
    if (window.localStorage.getItem("owner")) {
      setOwner(JSON.parse(window.localStorage.getItem("owner") || "{}"));
    }
  }, []);

  return <LoginCtx.Provider value={value}>{children}</LoginCtx.Provider>;
};

export default LoginCtx;
