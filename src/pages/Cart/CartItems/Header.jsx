import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { clearCart } from "../../../actions/auth";

const Header = ({ price, discountedPrice, setCheckout, newTotal }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row md:gap-4 md:relative font-semibold text-primary justify-between">
        <div className="flex border-b border-gray-300 md:border-0 px-2 py-4">
          <div className="hidden md:block">
            {" "}
            <span className="opacity-0">.</span>
            <hr className="absolute w-full text-gray-400 transform -translate-x-2" />
          </div>
          <b
            onClick={() => dispatch(clearCart())}
            className="self-center text-sm text-red-500 cursor-pointer"
          >
            Remove
          </b>
        </div>
        <div className="flex md:flex-col justify-between md:items-center border-b border-gray-300 md:border-0 md:gap-4  px-2 py-4">
          <p className="text-xs md:text-sm">
            Product<span className="md:hidden">:</span>
          </p>
          <div className="flex gap-4">
            <div className="hidden md:block">
              <img src="https://picsum.photos/100" alt="pic" />
            </div>
            <div className="text-right md:text-left flex flex-col justify-around">
              <p>Our solutions</p>
              <Link to="/categories/our-solutions">
                {" "}
                <u className="text-sm text-tertiary cursor-pointer">Edit</u>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col justify-between border-b border-gray-300 md:border-0 px-2 py-4">
          <p className="text-xs md:text-sm">
            Price<span className="md:hidden">:</span>
          </p>
          <div className="text-right md:text-left">
            <p>
              <input
                type="radio"
                id="one-time"
                name="price"
                className="mr-2"
                // onFocus={() => dispatch(setPayment(false))}
                onFocus={() =>
                  setCheckout((prevState) => ({
                    ...prevState,
                    checkoutWeekly: false,
                  }))
                }
              />
              <label htmlFor="one-time">
                <span className="text-sm">{price}.00 ₱</span>{" "}
                <span className="text-xs">One-time order</span>
              </label>
            </p>
            <br />
            <p>
              <input
                type="radio"
                id="weekly"
                name="price"
                className="mr-2"
                // onFocus={() => dispatch(setPayment(true))}
                onFocus={() =>
                  setCheckout((prevState) => ({
                    ...prevState,
                    checkoutWeekly: true,
                  }))
                }
              />
              <label htmlFor="weekly">
                <span className="text-sm">{discountedPrice} ₱</span>{" "}
                <span className="text-xs">Weekly order</span>
              </label>
            </p>
          </div>
          <div className="hidden md:block" />
        </div>
        <div className="flex md:flex-col justify-between border-b border-gray-300 md:border-0 px-2 py-4 items-center">
          <p className="text-xs md:text-sm">
            Quantity<span className="md:hidden">:</span>
          </p>
          <input
            type="number"
            min="1"
            className="border-b outline-none w-12 text-center p-2 text-tertiary"
            onChange={(e) =>
              setCheckout((prevState) => ({
                ...prevState,
                checkoutQuantity: parseInt(e.target.value) || 1,
              }))
            }
          />
          <div className="hidden md:block" />
        </div>
        <div className="flex md:flex-col justify-between px-2 py-4">
          <p className="md:text-sm">
            Subtotal<span className="md:hidden">:</span>
          </p>
          <p>{newTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ₱</p>
          <div className="hidden md:block" />
        </div>
      </div>
    </div>
  );
};

export default Header;
