import { useEffect, useRef, useState } from "react";
import { useScript } from "../hooks/useScript";
import { GoogleLogin } from "./GoogleLogin";
import jwtDecode from "jwt-decode";

declare const window: Window &
  typeof globalThis & {
    google: any;
    GoogleAuth: any;
  };
const resFormatted = (res: any) => {
  const payload: any = jwtDecode(res.credential);
  if (payload.email) {
    return {
      email: payload.email,
      name: payload.name,
      photo: payload.picture,
      id: payload.sub,
    };
  }
  return null;
};

export const GLog = ({
  setOwner,
  owner,
  onGoogleSignIn = (res: any) => {
    resFormatted(res);
    window.localStorage.setItem("owner", JSON.stringify(resFormatted(res)));
    setOwner(resFormatted(res));
    window.location.href = "/hello";
  },
}: any) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const loginBtn = useRef<HTMLButtonElement>(null);
  const checkLogin = () => {
    if (window.localStorage.getItem("owner")) {
      return true;
    }
    return false;
  };
  useEffect(() => {
    setLoggedIn(checkLogin());
  }, []);

  useScript("https://accounts.google.com/gsi/client", () => {
    window.google.accounts.id.initialize({
      client_id:
        "945421301972-nrjq6m1m6cgt7upkgd01ln0092ekkf5e.apps.googleusercontent.com",
      callback: onGoogleSignIn,
      scope: "profile email",
    });
    window.google.accounts.id.renderButton(loginBtn.current, {
      theme: "outline",
      size: "large",
      text: "continue_with",
      logo_alignment: "left",
      width: "240",
      height: "50",
    });
    if (!checkLogin()) {
      window.google.accounts.id.prompt();
    }
  });

  return (
    <>
      <GoogleLogin className="w-[240px] h-[50px] disabled" />{" "}
      <button
        className="rounded-full opacity-0 z-10 absolute mt-[-2.8em] ml-[-6.7em]"
        ref={loginBtn}
        onClick={() => {
          console.log("clicked");
        }}
      ></button>
    </>
  );
};
