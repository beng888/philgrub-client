import React, { useState } from "react";

import UserOrders from "./UserOrders";
import Address from "./Address";

const AdminOrders = ({ o, path }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="flex justify-between bg-gray-400 p-2 cursor-pointer hover:bg-gray-300"
        onClick={() => setOpen(!open)}
      >
        <h5 className="uppercase">{o.username}</h5>
        <p>{o.orderTime}</p>
      </div>
      <div
        className={`${
          !open ? "scale-y-0 absolute" : "scale-y-100 relative"
        } transform trans-out origin-top w-full`}
      >
        <Address A={o.billingAddress} type="billing" />
        {o.shippingAddress && <Address A={o.shippingAddress} type="shipping" />}
        <UserOrders order={o.order} path={path} />
        {o.orderNotes && (
          <details className="border border-gray-300 bg-gray-100 px-4">
            <summary className="summary  ">Order Notes</summary>
            <div className="content tracking-widest mb-8 leading-loose">
              {o.orderNotes}
            </div>
          </details>
        )}
      </div>
    </div>
  );
};

export default AdminOrders;
