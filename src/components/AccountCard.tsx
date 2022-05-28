import { getUserDetail } from "../helper/getUserDetail";
import { useScript } from "../hooks/useScript";

declare const window: Window &
  typeof globalThis & {
    google: any;
  };

interface AccCardProp {
  onMouseOver: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseOut: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  className: string;
}

export const AccountCard = ({
  onMouseOver,
  onMouseOut,
  className,
}: AccCardProp) => {
  const owner_data = getUserDetail();
  useScript("https://accounts.google.com/gsi/client", () => {});

  const handleLogout = () => {
    window.localStorage.removeItem("owner");
    window.google.accounts.id.disableAutoSelect();
    window.location.href = "/";
  };
  return (
    <div
      className={`m-auto rounded-md bg-indigo-100 text-lg font-semibold px-2 ${className}`}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <div>
        <div className="text-2xl font-semibold p-2 text-left">
          <span className="capitalize text-blue-800">{owner_data?.name}</span>
          <div className="text-sm lowercase"> {owner_data?.email} </div>
          <div className="logout-btn m-auto mt-3">
            <input
              type="image"
              src="https://www.svgrepo.com/show/43631/logout.svg"
              alt="logout"
              onClick={handleLogout}
              className="h-6 w-6 rotate-180"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
