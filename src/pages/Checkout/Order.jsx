import React from "react";

import { groupBy } from "../../helpers";
const Order = ({ checkout }) => {
  const total = checkout.checkoutTotal
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const orders = groupBy(checkout.checkoutCart, "category");

  // const items = Object.keys(orders).map((o) => [o].map((i) => i.quantity));
  console.log(orders);

  return (
    <div className="flex flex-col font-bold text-xs tracking-wider">
      <div className="flex border-b border-gray-300 p-2">
        <p className="w-2/3">Product</p>
        <p className="w-1/3">Subtotal</p>
      </div>
      <div className="flex flex-col gap-3 border-b border-gray-300 p-2 font-normal">
        <div className="flex">
          <p className="w-2/3">
            Our solutions <b>× {checkout.checkoutQuantity}</b>{" "}
          </p>
          <p className="w-1/3">{total} ₱</p>
        </div>
        {Object.keys(orders).map((o, i) => (
          <div key={i} className="ml-8">
            <div className="flex">
              <p className="w-2/3 capitalize">{o} meals:</p>
              <p className="w-1/3">
                <i className="fas fa-share text-xs transform -translate-x-2" />
                {orders[o]
                  .reduce(function (a, b) {
                    return checkout.checkoutWeekly
                      ? a + b.price * b.quantity * 0.92
                      : a + b.price * b.quantity;
                  }, 0)
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                ₱
              </p>
            </div>

            {orders[o].map((item) => (
              <p key={item._id} className="my-2">
                {" "}
                {item.title} <b>x {item.quantity}</b>{" "}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="flex border-b border-gray-300 p-2">
        <p className="w-2/3">Subtotal</p>
        <p className="w-1/3">{total} ₱</p>
      </div>
      <div className="flex p-2">
        <p className="w-2/3">Total</p>
        <p className="w-1/3">{total} ₱</p>
      </div>
    </div>
  );
};

export default Order;
