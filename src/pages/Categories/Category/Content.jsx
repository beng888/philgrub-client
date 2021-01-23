import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import Button from "../../../components/Button";
import { updateCart } from "../../../helpers";
import { registerObserver } from "../../../helpers";

const Content = ({ food, cart, setCart }) => {
  const [showImage, setShowImage] = useState(false);
  const placeHolderRef = useRef(null);

  useEffect(() => {
    registerObserver(placeHolderRef.current, setShowImage);
  }, []);

  let currentItem;
  try {
    currentItem = cart.find((current) => current._id === food._id);
  } catch (error) {
    currentItem = null;
  }

  return (
    <div className="flex flex-col justify-between text-center sm:text-left">
      {" "}
      <Link to={`/categories/${food.category}/${food.title}`}>
        {showImage ? (
          <img src={food.image.image_path} alt={food.image.originalname} />
        ) : (
          <img
            ref={placeHolderRef}
            src="/images/preloader.gif"
            alt="preloader.gif"
          />
        )}
        <h3 className="my-4">
          {" "}
          {food.title}{" "}
          {currentItem &&
            currentItem.quantity > 1 &&
            `x ${currentItem.quantity}`}{" "}
        </h3>{" "}
      </Link>
      <div>
        <Button
          btn="btn-primary-sm"
          onClick={() => updateCart(cart, setCart, food)}
        >
          <p className="text-xs flex items-center gap-x-2">
            {currentItem ? (
              <i className="fas fa-times" />
            ) : (
              <i className="fas fa-check" />
            )}{" "}
            ADD FOR ₱{" "}
            {food.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00
          </p>{" "}
        </Button>
        <div
          className={`text-secondary transform trans-out  ${
            currentItem
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          {" "}
          <label htmlFor="quantity" className="text-xs tracking-widest">
            QTY:
          </label>
          &nbsp;{" "}
          {currentItem ? (
            <input
              type="number"
              min={0}
              value={currentItem.quantity}
              id="quantity"
              className="border-b outline-none w-20 text-center p-2"
              onChange={(e) => updateCart(cart, setCart, currentItem, e)}
            />
          ) : (
            <br />
          )}{" "}
          <br />
        </div>
      </div>
    </div>
  );
};

export default Content;
