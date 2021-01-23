import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Header from "./Header";
import Body from "./Body";
import Total from "./Total";
import { updateCart, proceedToCheckout } from "../../../actions/auth";
import Updating from "../../../components/Loader/Updating";

const CartItems = ({ cart }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let price = cart.reduce((total, obj) => obj.price + total, 0);
  let total = cart.reduce((total, obj) => obj.price * obj.quantity + total, 0);
  const { updating } = useSelector((state) => state.variables);

  const discountedPrice =
    price &&
    (price * 0.92)
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const discountedTotal = total && (total * 0.92).toFixed(2);
  // .toString()
  // .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  price = price && price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  //* Merge Duplicates

  const newCart = Object.values(
    cart.reduce((a, curr) => {
      if (!a[curr._id]) a[curr._id] = Object.assign({}, curr);
      // Object.assign() is used so that the original element(object) is not mutated.
      else a[curr._id].quantity += curr.quantity;
      return a;
    }, {})
  );

  // * Toggle Update Button

  const [forUpdate, setForUpdate] = useState(false);

  // * Remove items with 0 quantity then update cart

  const [updatedCart, setUpdatedCart] = useState(newCart);

  const addToCartHandler = () => {
    const newUpdatedCart = updatedCart.filter(
      (current) => current.quantity !== 0
    );

    dispatch(updateCart(newUpdatedCart));
    setCheckout((prevState) => ({
      ...prevState,
      checkoutCart: newUpdatedCart,
    }));

    setForUpdate(false);
  };

  // * PROCEED TO CHECKOUT
  const [checkout, setCheckout] = useState({
    checkoutWeekly: false,
    checkoutTotal: total,
    checkoutQuantity: 1,
    checkoutCart: updatedCart,
    time: new Date().toLocaleString("en-US", {
      timeZone: "Asia/Manila",
    }),
  });
  const { checkoutWeekly, checkoutQuantity } = checkout;

  let newTotal = checkoutWeekly ? discountedTotal : total;
  newTotal = (newTotal * checkoutQuantity).toFixed(2);

  console.log(checkout);

  useEffect(() => {
    setCheckout((prevState) => ({
      ...prevState,
      checkoutTotal: parseInt(newTotal) || 0,
    }));
  }, [newTotal]);

  const checkoutHandler = () => {
    dispatch(proceedToCheckout(checkout));
    navigate("/checkout");
  };

  return (
    <>
      <div className="relative">
        <Header
          price={price}
          discountedPrice={discountedPrice}
          setCheckout={setCheckout}
          newTotal={newTotal}
        />
        <div className="flex flex-col text-primary font-semibold ">
          {newCart.map((item) => (
            <Body
              key={item._id}
              item={item}
              cart={newCart}
              setUpdatedCart={setUpdatedCart}
              setForUpdate={setForUpdate}
            />
          ))}
        </div>
        {updating && <Updating />}
      </div>
      <Total
        addToCartHandler={addToCartHandler}
        newTotal={newTotal}
        forUpdate={forUpdate}
        updatedCart={updatedCart}
        checkoutHandler={checkoutHandler}
        updating={updating}
      />
    </>
  );
};

export default CartItems;
