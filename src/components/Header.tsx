import { Link } from "react-router-dom";
import logo from "../img/logo.svg";

export const Header = () => {
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
        </nav>
      </div>
    </div>
  );
};
