import { Link } from "react-router-dom";
import bg1 from "../img/bg1.png";

export const Landing = () => {
  return (
    <div className="text-lg h-[100vh] w-full flex justify-center">
      <div className="mx-auto my-6 flex flex-col">
        <div>
          <img
            src={bg1}
            alt="bg1"
            className="max-h-[40vh] m-auto animate-fbg-rot"
          />
        </div>
        <div>
          <div className="text-4xl font-semibold w-2/3 m-auto">
            One stop solution to manage your business orders
          </div>
          <div className="mt-8">
            {window.localStorage.getItem("username") ? (
              <Link
                to="/orders"
                className="border-2 bg rounded-xl p-2 my-4 transform transition ease-in-out hover:opacity-80 duration-500 bg-gradient-to-r from-violet-600 to-blue-500 text-white font-bold"
              >
                Get started with your orders
              </Link>
            ) : (
              <Link
                to="/login"
                className="border-2 bg rounded-xl p-2 my-4 transform transition ease-in-out hover:opacity-80 duration-500 bg-gradient-to-r from-violet-600 to-blue-500 text-white font-bold max-h-min"
              >
                Get started now
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
