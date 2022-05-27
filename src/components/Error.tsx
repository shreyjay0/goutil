import { Link } from "react-router-dom";

export const Error = ({ error }: any) => {
  return (
    <div className="text-lg h-[100vh]  w-full flex justify-center">
      <div className="m-auto">
        <span className="text-2xl font-semibold"> 404 </span>
        <span className="text-2xl font-light">|</span> This page does not exists
        <div className="text-sm mt-8 font-bold">
          <Link to="/">
            <div className="group hover:text-grey-400 max-w-max transition ease-in-out duration-200 m-auto hover:cursor-pointer">
              Go home{" "}
              <span
                aria-hidden="true"
                className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200"
              >
                →
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
