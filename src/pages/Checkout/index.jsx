import React, { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import FormField from "../../components/FormField";
import Button from "../../components/Button";
import { Billing, Shipping } from "../index";
import Order from "./Order";
import Stripe from "./Stripe";
import { setAlert } from "../../actions/alert";
import Loader from "../../components/Loader";

const Checkout = () => {
  const dispatch = useDispatch();
  const [coupon, setCoupon] = useState("");
  const [orderNotes, setOrderNotes] = useState("");
  const [openShipping, setOpenShipping] = useState(false);
  const { loading } = useSelector((state) => state.variables);

  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

  const { guest } = useSelector((state) => state.guest);
  const { user } = useSelector((state) => state.auth);
  const guest_checkout = JSON.parse(localStorage.getItem("guest_checkout"));

  const checkout = user?.username
    ? user.checkout
    : guest_checkout
    ? guest_checkout
    : guest.guest_checkout;

  console.log(checkout);

  const submitCoupon = (e) => {
    e.preventDefault();
    dispatch(setAlert(`Coupon "${coupon}" does not exist!`, "error"));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-y-8 py-40 px-6 md:px-12 max-w-4xl mx-auto">
          {checkout && !checkout.hasOwnProperty("checkoutTotal") ? (
            <div
              className="border-tertiary text-tertiary
     flex items-center justify-between  w-full text-xs tracking-widest bg-gray-100 py-2 px-4"
            >
              <div>
                <i className="far fa-calendar" />{" "}
                <span>
                  &nbsp;Checkout is not available whilst your cart is empty
                </span>
              </div>

              <Link to="/categories/our-solutions">
                <Button btn="btn-secondary-sm">Continue Shopping</Button>
              </Link>
            </div>
          ) : (
            <>
              <form autoComplete="off" onSubmit={(e) => submitCoupon(e)}>
                <h3 className="text-primary font-bold mb-4">Coupon</h3>
                <FormField
                  value={coupon}
                  onChange={(e) => {
                    setCoupon(e.target.value);
                  }}
                  type={"text"}
                  name={"coupon"}
                  label={"If you have a coupon code, please apply it below."}
                  placeholder={"Coupon code"}
                />
                <div className="text-right">
                  <Button btn="btn-secondary">Apply Coupon</Button>
                </div>
              </form>{" "}
              <Billing />
              <div>
                <input
                  type="checkbox"
                  id="shipping"
                  style={{}}
                  onClick={() => setOpenShipping(!openShipping)}
                />
                <label htmlFor="shipping">
                  &nbsp;&nbsp;&nbsp;Ship to a different address?
                </label>
              </div>
              <div
                className={`transform trans-out origin-top ${
                  openShipping ? "scale-y-100 relative" : "scale-y-0 absolute"
                }`}
              >
                <Shipping />
              </div>{" "}
              <div className="z-10">
                <FormField
                  value={orderNotes}
                  onChange={(e) => {
                    setOrderNotes(e.target.value);
                  }}
                  type={"textarea"}
                  name={"orderNotes"}
                  label={"Order notes (optional)"}
                  placeholder={
                    "Notes about your order, e.g. special notes for delivery."
                  }
                />
              </div>
              <h3 className="text-primary font-bold ">Delivery</h3>
              <p className="text-tertiary tracking-wider">
                You can edit your order until this Tuesday 11:29pm. Your order
                will be delivered to your address next Tuesday between 8am and
                5pm.
              </p>
              <h3 className="text-primary font-bold ">Your order</h3>
              {checkout && checkout.checkoutTotal ? (
                <Order checkout={checkout} />
              ) : (
                <div>You have no pending orders</div>
              )}
              <div className="inline-flex gap-x-1">
                <h3 className="text-primary font-bold ">Carte de crédit </h3>
                <img src="/images/card-visa.svg" alt="visa" width="50" />
                <img
                  src="/images/card-mastercard.svg"
                  alt="mastercard"
                  width="50"
                />
                <img src="/images/card-amex.svg" alt="amex" width="50" />
              </div>
              <Elements stripe={stripePromise}>
                {checkout && (
                  <Stripe checkout={checkout} orderNotes={orderNotes} />
                )}
              </Elements>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Checkout;
