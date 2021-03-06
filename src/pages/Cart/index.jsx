import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Button from "../../components/Button";
import CartItems from "./CartItems/index.jsx";
import Loader from "../../components/Loader";

const Cart = () => {
  const { guest } = useSelector((state) => state.guest);
  const { user } = useSelector((state) => state.auth);
  let guest_cart = JSON.parse(localStorage.getItem("guest_cart"));
  const { loading } = useSelector((state) => state.variables);

  console.log(guest.guest_cart);

  const cart = user?.username
    ? user.cart
    : guest_cart
    ? guest_cart
    : guest.guest_cart;

  console.log(loading);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="pt-52 pb-28 grid px-4  xl:px-40">
          <div
            className={`${
              cart.length > 0 ? "success" : "warning"
            } flex flex-col sm:flex-row  text-center`}
          >
            {cart.length > 0 ? (
              <div>
                <i className="fas fa-check-circle" />
                <span>&nbsp;“Our solutions” has been added to your cart.</span>
              </div>
            ) : (
              <div>
                <i className="far fa-calendar" />{" "}
                <span>&nbsp;Your cart is currently empty</span>
              </div>
            )}
            <Link to="/categories/our-solutions">
              <Button btn="btn-secondary-sm">Continue Shopping</Button>
            </Link>
          </div>

          {cart.length > 0 ? <CartItems cart={cart} /> : null}
        </div>
      )}
    </>
  );
};

export default Cart;
