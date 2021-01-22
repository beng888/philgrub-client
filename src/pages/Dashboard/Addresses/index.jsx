import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Button from "../../../components/Button";

const Addresses = () => {
  const { user } = useSelector((state) => state.auth);
  const { guest } = useSelector((state) => state.guest);

  const billingAddress = user?.username
    ? user.billingAddress
    : guest.guest_billingAddress;
  const shippingAddress = user?.username
    ? user.shippingAddress
    : guest.guest_shippingAddress;

  return (
    <div className="center-content flex-col gap-8 p-12">
      <p className="text-tertiary tracking-widest">
        The following addresses will be used on the checkout page by default.
      </p>
      <div className="flex flex-col md:flex-row gap-8">
        <div>
          <h4>Billing address</h4>
          {billingAddress ? (
            <div>
              <p>{billingAddress.billing_firstName}</p>
              <p>{billingAddress.billing_townCity}</p>
              <p>{billingAddress.billing_postalCode}</p>
            </div>
          ) : (
            <p>You have not set up this type of address yet.</p>
          )}
          <Link to="/dashboard/addresses/billing">
            <Button btn="btn-secondary-sm">
              {billingAddress ? "Edit" : "Add"}
            </Button>
          </Link>
        </div>
        <div>
          <h4>Shipping address</h4>
          {shippingAddress ? (
            <div>
              <p>{shippingAddress.shipping_firstName}</p>
              <p>{shippingAddress.shipping_townCity}</p>
              <p>{shippingAddress.shipping_postalCode}</p>
            </div>
          ) : (
            <p>You have not set up this type of address yet.</p>
          )}{" "}
          <Link to="/dashboard/addresses/shipping">
            <Button btn="btn-secondary-sm">
              {shippingAddress ? "Edit" : "Add"}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Addresses;
