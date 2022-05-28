import { Link } from "react-router-dom";
import { getUserDetail } from "../helper/getUserDetail";
import useLogin from "../hooks/useLogin";

export const Home = () => {
  const owner_data = getUserDetail();
  const { owner } = useLogin();
  console.log(owner);
  return (
    <div className="m-auto w-full min-h-screen flex justify-center">
      <div className="p-[10%] w-full pt-[4%]">
        <div className="text-2xl font-semibold p-3 text-left mb-[6%]">
          Hello{" "}
          <span className="capitalize text-blue-800">{owner_data?.name}!</span>
        </div>
        <div className="w-[18em] bg-slate-200 mt-6 rounded-md min-h-min p-3 m-auto">
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
