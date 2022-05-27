import { useState } from "react";

type GoogleLoginProps = {
  className?: string;
  ref?: any;
};
export const GoogleLogin = ({ className }: GoogleLoginProps) => {
  const [loadingLogin, setLoadingLogin] = useState(false);
  const handleLoginWGoogle = () => {
    setLoadingLogin(true);
  };

  return (
    <button
      className="rounded-lg bg-indigo-600 text-white p-1 font-semibold px-4 mt-5 flex flex-row mb-3 hover:opacity-90 transform transition duration-500 min-w-[12em] min-h-[2em]"
      onClick={handleLoginWGoogle}
    >
      {loadingLogin ? (
        <div className="m-auto">
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      ) : (
        <>
          <span className="mr-6 font-bold text-2xl font-product-sans">G</span>
          <span>Login with Google</span>
        </>
      )}
    </button>
  );
};
