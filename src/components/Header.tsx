import { useState } from "react";
import { Link } from "react-router-dom";
import { getUserDetail } from "../helper/getUserDetail";
import logo from "../img/logo.svg";
import { AccountCard } from "./AccountCard";

export const Header = () => {
  const owner_data = getUserDetail();
  const [profOn, setProfOn] = useState(false);

  return (
    <div className="flex items-center justify-between flex-wrap bg-hdr-1 px-2">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/">
          <img
            className="fill-current w-24 h-16 mr-2"
            src={logo}
            alt="goutil logo"
          />
        </Link>
      </div>
      <div className="w-1/2">
        <nav className="flex justify-end text-[#0084f4] font-lovers-quarrel">
          <li className="list-none mx-2">
            <Link to="/">
              <span className="font-semibold text-xl tracking-tight">Home</span>
            </Link>
          </li>
          <li className="list-none mx-2">
            <Link to="/orders">
              <span className="font-semibold text-xl tracking-tight">
                Orders
              </span>
            </Link>
          </li>
          <li className="list-none mx-2">
            <Link to="/add">
              <span className="font-semibold text-xl tracking-tight">
                Add Order
              </span>
            </Link>
          </li>
          {owner_data.id && (
            <li className="list-none mx-2">
              <div
                onMouseOver={() => {
                  setProfOn(true);
                }}
                onMouseOut={() => {
                  setProfOn(false);
                }}
                className="mx-2 hover:cursor-pointer h-8 w-8 rounded-full flex flex-col"
              >
                <input
                  type="image"
                  className="profile h-8 w-8 opacity-70 rounded-full"
                  src={owner_data?.photo}
                  alt="account"
                />
                {profOn && (
                  <AccountCard
                    className="absolute mt-8 right-[1.5em] z-10 hover:cursor-default"
                    onMouseOver={() => {
                      setProfOn(true);
                    }}
                    onMouseOut={() => {
                      setProfOn(false);
                    }}
                  />
                )}
              </div>
            </li>
          )}
        </nav>
      </div>
    </div>
  );
};
