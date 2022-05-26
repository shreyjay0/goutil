import { createContext, useState } from "react";

const LoginCtx = createContext<any>(null!);

const LoginProvider = ({ children }: any) => {
  let [owner, setOwner] = useState<any>(null);

  let value = { owner };

  return <LoginCtx.Provider value={value}>{children}</LoginCtx.Provider>;
};

export { LoginCtx, LoginProvider };
