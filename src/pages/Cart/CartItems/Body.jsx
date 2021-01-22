import React from "react";
import { Link } from "react-router-dom";

import { updateCart } from "../../../helpers";

const Body = ({ item, cart, guest_cart, setUpdatedCart, setForUpdate }) => {
  let currentItem;
  try {
    currentItem = cart.find((current) => current._id === item._id);
  } catch (error) {
    currentItem = null;
  }
  return (
    <div className="odd:bg-gray-100 px-4 py-2 flex flex-col md:flex-row md:justify-between gap-4 md:items-center">
      <div className="hidden md:block" />
      <div className="flex justify-between md:items-center">
        <p className="text-xs md:hidden">Product:</p>
        <Link to={`/categories/${item.category}/${item.title}`}>
          <div className="flex gap-6 items-center">
            <img
              src={item.image.image_path}
              alt={item.image.originalname}
              className="hidden md:block"
              width="100"
            />
            <p className="text-sm">{item.title}</p>
          </div>
        </Link>
      </div>
      <div className="flex justify-between md:items-center">
        <p className="text-xs md:hidden">Price:</p>
        <p className="text-xs flex items-center">
          <i className="fas fa-share text-xs" />
          &nbsp;{item.price}.00 ₱
        </p>
      </div>
      <div className="flex justify-between md:items-center">
        <p className="text-sm md:hidden">Quantity</p>
        <input
          type="number"
          min="1"
          className="border-b outline-none w-12 text-center p-2 text-tertiary"
          placeholder={item.quantity}
          onChange={(e) => {
            updateCart(cart, setUpdatedCart, currentItem, e);
            setForUpdate(true);
          }}
        />
      </div>{" "}
      <div className="flex justify-between md:items-center">
        <p className="text-sm md:hidden">Subtotal</p>
        <p> {item.price * item.quantity} ₱</p>
      </div>
    </div>
  );
};

export default Body;
