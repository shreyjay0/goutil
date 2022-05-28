import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getUserDetail } from "../helper/getUserDetail";

export interface OrderType {
  id: string;
  customer_name: string;
  customer_email: string;
  product: string;
  quantity: number;
}
const initOrder = {
  id: "",
  customer_name: "",
  customer_email: "",
  product: "",
  quantity: 0,
};
export const Edit = () => {
  const [orderid, setOrderid] = React.useState("");
  const loc = useLocation();
  const [currOrder, setCurrOrder] = React.useState<OrderType>(initOrder);
  const [orders, setOrders] = React.useState([initOrder]);
  const [emailError, setEmailError] = React.useState<boolean>(false);
  useEffect(() => {
    const od = getUserDetail();
    setOrderid(loc.pathname.split("/")[2]);
    if (typeof window.localStorage.getItem(od.email) === "string") {
      const ov = window.localStorage.getItem(od.email) || "";
      setOrders(JSON.parse(ov));
    }
  }, []);
  useEffect(() => {
    const sorderdata = orders.filter((o: OrderType) => o.id === orderid)[0];
    setCurrOrder(sorderdata);
  }, [orders]);

  const editOrderById = (id: string) => {
    const order = orders.findIndex((item: any) => item.id === id);
    const updatedArr = [
      ...orders.slice(0, order),
      currOrder,
      ...orders.slice(order + 1),
    ];
    setOrders(updatedArr);
    window.localStorage.setItem(
      getUserDetail().email,
      JSON.stringify(updatedArr)
    );
    window.location.href = "/orders";
  };
  const checkEmail = (email: string) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  return (
    <>
      {currOrder && currOrder["id"] !== "" && (
        <div>
          <div className="font-semibold mt-4 text-[2.5em] text-indigo-600 font-proxima-nova">
            {" "}
            Edit order{" "}
          </div>
          <div className="edit-order-card rounded-md m-4 p-4 text-left bg-slate-100">
            <div className="edit-order-item-label text-lg font-semibold">
              Customer Name
            </div>
            <input
              className="edit-order-item-value text-3xl rounded-md p-1 px-2 text-blue-900 mb-6 font-bold capitalize"
              type="text"
              value={currOrder?.customer_name}
              onChange={(e) => {
                setCurrOrder({
                  ...currOrder,
                  customer_name: e.target.value,
                });
              }}
            />
            <div className="edit-order-item-label text-lg font-semibold">
              Customer Email
            </div>

            <input
              className="edit-order-item-value text-3xl rounded-md p-1 px-2 text-blue-900 mb-1 font-bold"
              type="email"
              value={currOrder?.customer_email}
              onChange={(e) => {
                setCurrOrder({
                  ...currOrder,
                  customer_email: e.target.value,
                });
              }}
            />
            <div className="error-msg text-red-600 text-xs mb-6">
              {emailError && "Please enter a valid email"}
            </div>
            <div className="edit-order-item-label text-lg font-semibold">
              Select Product
            </div>
            <select
              className="edit-order-item-value text-3xl rounded-md p-1 px-2 text-blue-900 mb-6 font-bold"
              value={currOrder?.product}
              onChange={(e) => {
                setCurrOrder({
                  ...currOrder,
                  product: e.target.value,
                });
              }}
            >
              <option value="Product 1">Product 1</option>
              <option value="Product 2">Product 2</option>
              <option value="Product 3">Product 3</option>
            </select>
            <div className="edit-order-item-label text-lg font-semibold">
              Quantity
            </div>
            <input
              className="edit-order-item-value text-3xl rounded-md p-1 px-2 text-blue-900 mb-6 font-bold"
              type="number"
              value={currOrder?.quantity}
              onChange={(e) => {
                parseInt(e.target.value) > 0
                  ? setCurrOrder({
                      ...currOrder,
                      quantity: parseInt(e.target.value),
                    })
                  : setCurrOrder({ ...currOrder, quantity: 0 });
              }}
            />
            <div>
              <button
                className="edit-order-item-value text-3xl mb-6 rounded-xl p-2 px-4 my-4 bg-blue-500 text-white font-bold hover:opacity-80"
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                  e.preventDefault();
                  if (
                    currOrder.customer_name &&
                    currOrder.customer_email &&
                    checkEmail(currOrder.customer_email) &&
                    currOrder.product &&
                    currOrder.quantity > 0
                  ) {
                    editOrderById(orderid);
                  } else {
                    if (!currOrder.customer_name) {
                      alert("Customer name is required");
                    }
                    if (!currOrder.customer_email) {
                      alert("Customer email is required");
                    }
                    if (!checkEmail(currOrder.customer_email)) {
                      setEmailError(true);
                    }
                    if (currOrder.quantity <= 1) {
                      alert("Quantity is required");
                    }
                  }
                }}
              >
                Update Order
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
