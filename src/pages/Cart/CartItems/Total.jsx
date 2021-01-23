import React from "react";

import Button from "../../../components/Button";
import Updating from "../../../components/Loader/Updating";

const Total = ({
  newTotal,
  addToCartHandler,
  checkoutHandler,
  updatedCart,
  forUpdate,
  updating,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:gap-x-20 text-primary tracking-widest justify-between mt-4 ">
      <div className="flex flex-col gap-3 sm:gap-0 sm:flex-row h-fit sm:max-w-md justify-between text-xs text-gray-300 items-center sm:border">
        <input
          type="text"
          placeholder="Coupon code"
          className=" py-5 px-4 sm:py-0 h-6 border sm:border-0 w-full sm:w-fit outline-none text-gray-500 sm:border-r border-gray-300 tracking-widest"
        />
        <button className="flex-1 border sm:border-0 border-gray-300 w-full sm:w-fit text-tertiary tracking-widest font-semibold py-3 px-4 transform trans-out hover:bg-third hover:text-gray-200">
          APPLY COUPON
        </button>
      </div>
      <div className="flex flex-col flex-grow md:max-w-xl relative">
        {" "}
        <div className="md:w-fit md:ml-auto">
          <Button
            wFull
            btn="btn-secondary-full"
            onClick={addToCartHandler}
            disabled={!forUpdate}
          >
            <p className="text-xs w-full whitespace-nowrap">Update cart</p>
          </Button>
        </div>
        <b className=" my-4">Cart totals</b>
        <div className="flex justify-between px-2 py-1">
          <b className="text-xs ">Subtotal:</b>
          <p className="text-xs">
            {newTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ₱
          </p>
        </div>
        <div className="flex justify-between px-2 py-1 mb-8 border-t border-gray-200 bg-gray-100">
          <b className="text-xs ">Total:</b>

          <b className="text-xs">
            {newTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ₱
          </b>
        </div>
        <Button
          wFull
          btn="btn-primary-full"
          disabled={updatedCart.length === 0 || updating}
          onClick={() => checkoutHandler()}
        >
          <p className="whitespace-nowrap"> PROCEED TO CHECKOUT</p>
        </Button>{" "}
        {updating && <Updating />}
      </div>
    </div>
  );
};

export default Total;
