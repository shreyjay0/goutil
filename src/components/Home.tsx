import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="m-auto min-h-screen flex justify-center">
      <div className="w-full p-[10%]">
        <div className="text-2xl font-semibold p-3 text-left rounded-md bg-slate-400">
          Hello {window.localStorage.getItem("username")},
        </div>
        {/* <div className="text-lg font-light">
          You are logged in as {window.localStorage.getItem("role")}
        </div> */}
        <div className="w-[18em] bg-slate-200 mt-6 rounded-md min-h-min p-3">
          <div className="font-semibold"> Manage your orders here</div>
          <div className="mt-4 mb-2">
            <Link
              to="/orders"
              className="border-2 bg rounded-xl p-2 my-4 bg-blue-500 text-white font-bold"
            >
              My orders
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
