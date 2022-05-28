import React, { useEffect } from "react";
import { getUserDetail } from "../helper/getUserDetail";
import * as data from "../data/DummyData.json";

export const Orders = () => {
  const [userDetail, setUserDetail] = React.useState<any>(null);
  const [order, setOrder] = React.useState<any>(null);
  useEffect(() => {
    const od = getUserDetail();
    setUserDetail(od);
    if (!window.localStorage.getItem(od.email)) {
      window.localStorage.setItem(od.email, JSON.stringify(data));
    }
    if (typeof window.localStorage.getItem(od.email) === "string") {
      const ov = window.localStorage.getItem(od.email) || "";
      setOrder(JSON.parse(ov));
    }
  }, []);
  const deleteOrder = (id: string) => {
    const newOrder = Object.values(order).filter((o: any) => o.id !== id);
    setOrder(newOrder);
    window.localStorage.setItem(userDetail.email, JSON.stringify(newOrder));
  };
  const editOrder = (id: string) => {
    window.location.href = `/edit/${id}`;
  };

  return (
    <div>
      <h1 className="font-semibold mt-4 text-[2.5em] text-indigo-600 font-proxima-nova">
        Orders
      </h1>
      <div className="owner-info">
        <div className="owner-info-card rounded-md m-4 p-4 text-left bg-slate-100">
          <div className="owner-info-item-label text-lg font-semibold">
            Owner Name
          </div>
          <div className="owner-info-item-value text-3xl text-blue-900 mb-6 font-bold capitalize">
            {userDetail?.name}
          </div>

          <div className="owner-info-item-label text-lg font-semibold">
            Owner Email
          </div>
          <div className="owner-info-item-value text-3xl text-blue-900 mb-6 font-bold">
            {userDetail?.email}
          </div>

          <div className="owner-info-item-label text-xs text-gray-500">
            {" "}
            {userDetail?.id}{" "}
          </div>
        </div>
      </div>
      <div className="m-4 mt-6">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-slate-100">
              <tr>
                <th
                  className="px-6 py-3 text-xs font-bold text-left text-gray-600 uppercase tracking-wider"
                  scope="col"
                >
                  Order ID
                </th>
                <th
                  className="px-6 py-3 text-xs font-bold text-left text-gray-600 uppercase tracking-wider"
                  scope="col"
                >
                  Ordered By
                </th>
                <th
                  className="px-6 py-3 text-xs font-bold text-left text-gray-600 uppercase tracking-wider"
                  scope="col"
                >
                  Customer Email
                </th>
                <th
                  className="px-6 py-3 text-xs font-bold text-left text-gray-600 uppercase tracking-wider"
                  scope="col"
                >
                  Product
                </th>
                <th
                  className="px-6 py-3 text-xs font-bold text-left text-gray-600 uppercase tracking-wider"
                  scope="col"
                >
                  Quantity
                </th>
                <th
                  className="px-6 py-3 text-xs font-bold text-left text-gray-600 uppercase tracking-wider"
                  scope="col"
                >
                  <span className="sr-only">Edit</span>
                </th>
                <th
                  className="px-6 py-3 text-xs font-bold text-left text-gray-600 uppercase tracking-wider"
                  scope="col"
                >
                  <span className="sr-only">Delete</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {order && order.length ? (
                Object.values(order).map((item: any) => (
                  <tr>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="text-sm text-left leading-5 text-gray-900">
                        {item.id}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="text-sm text-left leading-5 text-gray-900">
                        {item.customer_name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="text-sm text-left leading-5 text-gray-900">
                        {item.customer_email}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="text-sm text-left leading-5 text-gray-900">
                        {item.product}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="text-sm text-center leading-5 text-gray-900">
                        {item.quantity}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="text-sm text-left leading-5 text-gray-900">
                        <input
                          type="image"
                          alt="edit"
                          onClick={() => {
                            editOrder(item.id);
                          }}
                          src="https://img.icons8.com/ios/344/edit--v1.png"
                          className="hover:opacity-80 hover:scale-110 font-bold py-2 px-4 h-10 cursor-pointer"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="text-sm text-left leading-5 text-gray-900">
                        <input
                          type="image"
                          alt="delete"
                          onClick={() => {
                            deleteOrder(item.id);
                          }}
                          src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/344/external-delete-miscellaneous-kiranshastry-lineal-kiranshastry.png"
                          className="hover:opacity-80 hover:scale-110 font-bold py-2 px-4 h-10 cursor-pointer"
                        />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <div className="text-sm text-left leading-5 text-gray-900">
                      No Orders
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
