import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import Button from "../../components/Button";
import { setAlert } from "../../actions/alert";
import { stripePay } from "../../actions/stripe";
import Updating from "../../components/Loader/Updating";

const Stripe = ({ checkout, orderNotes }) => {
  const { checkoutTotal } = checkout;
  const [saveCard, setSaveCard] = useState(false);
  const [terms, setTerms] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const { updating } = useSelector((state) => state.variables);

  const { guest } = useSelector((state) => state.guest);
  const { user } = useSelector((state) => state.auth);
  const guest_billingAddress = JSON.parse(
    localStorage.getItem("guest_billingAddress")
  );
  const guest_shippingAddress = JSON.parse(
    localStorage.getItem("guest_shippingAddress")
  );

  const customer = user?.username ? user : guest;
  console.log(customer);

  const billingAddress = user?.username
    ? user.billingAddress
    : guest_billingAddress
    ? guest_billingAddress
    : guest.guest_billingAddress;

  const shippingAddress = user?.username
    ? user.shippingAddress
    : guest_shippingAddress
    ? guest_shippingAddress
    : guest.guest_shippingAddress;

  const description = `A Purchase from PhilGrub (${orderNotes})`;

  const philippineTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Manila",
  });

  const orders = {
    username: customer.username ? customer.username : "guest",
    billingAddress: billingAddress,
    shippingAddress: shippingAddress,
    order: customer.checkout ? customer.checkout : customer.guest_checkout,
    orderNotes: orderNotes,
    orderTime: philippineTime,
  };

  const submitToken = async () => {
    if (!stripe || !elements) return;
    const cardElement = elements.getElement(CardElement);
    try {
      const { token } = await stripe.createToken(cardElement);
      return token;
    } catch (error) {
      console.log(error);
    }
  };
  console.log(billingAddress);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let token = await submitToken();
    console.log(token);

    if (!checkout.hasOwnProperty("checkoutTotal")) {
      dispatch(setAlert("You have an empty checkout cart", "error"));
      return;
    }

    if (
      !billingAddress ||
      (Object.keys(billingAddress).length === 0 &&
        billingAddress.constructor === Object)
    ) {
      dispatch(setAlert("Please provide billing address", "error"));
      return;
    }
    if (!terms) {
      dispatch(setAlert("Consent needed for terms & conditions", "error"));
      return;
    }
    if (!token) {
      dispatch(setAlert("Payment cannot be submitted", "error"));
      return;
    }
    Object.assign(checkout, { time: philippineTime });

    dispatch(
      stripePay(token, checkoutTotal, description, checkout, saveCard, orders)
    );
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      {updating && <Updating />}
      <div className="flex flex-col gap-y-4">
        <div className="flex justify-between items-end text-tertiary font-semibold">
          <p>Card Number</p>
          <p className="text-xs">Expiration/Card Verification Code</p>
        </div>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                "::placeholder": {
                  color: "#aab7c4",
                  fontFamily: "sans-sarif",
                },
              },
              invalid: {
                color: "#e9327c",
              },
            },
          }}
          className="border-b-2 pb-4 border-tertiary"
        />
        {user.role !== null && (
          <div className="text-tertiary font-medium">
            <input
              type="checkbox"
              id="save-card"
              onClick={() => setSaveCard(!saveCard)}
            />
            <label htmlFor="save-card">&nbsp;&nbsp;Save Card and Charge</label>
          </div>
        )}

        <div className={`${terms ? "text-green-700" : "text-gray-400"}`}>
          <input type="checkbox" id="terms" onClick={() => setTerms(!terms)} />
          <label htmlFor="terms">
            &nbsp;&nbsp;I have read and agree to the website{" "}
            <u className="text-black">terms and conditions</u>{" "}
          </label>
        </div>
      </div>
      <div className="mt-4 ml-auto text-right">
        <Button btn="btn-primary" disabled={updating}>
          PLACE ORDER
        </Button>
      </div>
    </form>
  );
};

export default Stripe;
