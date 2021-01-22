import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavIcons = () => {
  const { user } = useSelector((state) => state.auth);
  const { guest } = useSelector((state) => state.guest);
  let guest_cart = JSON.parse(localStorage.getItem("guest_cart"));

  const cart =
    user && user.cart.length > 0
      ? user.cart
      : guest_cart
      ? guest_cart
      : guest.guest_cart;

  const newCart = Object.values(
    cart.reduce((a, curr) => {
      if (!a[curr._id]) a[curr._id] = Object.assign({}, curr);
      // Object.assign() is used so that the original element(object) is not mutated.
      else a[curr._id].quantity += curr.quantity;
      return a;
    }, {})
  );

  // console.log(newCart);

  return (
    <>
      <Link to="/dashboard" className="text-yellow-500">
        {user.role && <span className="badge">{user && user.username[0]}</span>}
        <i className="far fa-user-circle text-4xl" />
      </Link>

      <Link to="/cart" className="text-yellow-500">
        {newCart.length !== 0 && (
          <span className="badge">{newCart.length}</span>
        )}
        <i className="fas fa-shopping-bag text-4xl" />
      </Link>
    </>
  );
};

export default NavIcons;
