import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addToCart } from "../../../actions/auth";

const AddToCart = ({ cart }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cart.reduce(
    (total, obj) => obj.price * obj.quantity + total,
    0
  );

  const newTotal =
    total && total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  console.log(newTotal);

  // console.log(total);
  // console.log(cart);
  const addToCartHandler = () => {
    dispatch(addToCart(cart));
    navigate("/cart");
  };
  return (
    <div className="bg-third  grid md:grid-cols-2 items-center px-20 py-8  text-gray-50 tracking-widest ">
      <div className="text-xs leading-6">
        <b className="text-black">CHOOSE A PURCHASE PLAN:</b> <br />
        <input type="radio" id="one-time" name="order" />
        <label htmlFor="one-time">&nbsp;One-time order</label> <br />
        <input type="radio" id="weekly" name="order" />
        <label htmlFor="weekly">
          &nbsp;{" "}
          <span className="line-through text-black">
            {isNaN(total) ? "0" : newTotal}.00 ₱
          </span>{" "}
          <span>
            {isNaN(total)
              ? "0"
              : (total * 0.92)
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
            ₱{" "}
          </span>
          Weekly order
        </label>
      </div>
      <h5 className="flex justify-between  md:ml-auto gap-12">
        <div>{isNaN(total) ? "0" : newTotal}.00 ₱</div> <b>|</b>
        <button
          onClick={addToCartHandler}
          disabled={cart.length === 0}
          className={`${
            cart.length === 0 && "cursor-not-allowed text-opacity-30 "
          } tracking-wider text-white`}
        >
          ADD TO CART
        </button>
      </h5>
    </div>
  );
};

export default AddToCart;
