import React, { useState } from "react";
import { useSelector } from "react-redux";
import Caption from "./Caption";
import { Link, useParams } from "react-router-dom";
import AddToCart from "./AddToCart";

import { groupBy } from "../../../helpers";
import Button from "../../../components/Button";
import Content from "./Content";

const Category = () => {
  const menus = useSelector((state) => state.menus);
  const { category } = useParams();
  console.log(category);

  const menuCategory = groupBy(menus, "category");

  const [cart, setCart] = useState([]);

  return (
    <>
      <div className="flex flex-col padding z-50">
        {" "}
        <Link to="/categories">
          {" "}
          <Button btn="btn-secondary-sm"> Solution</Button>
        </Link>
        <br />
        <h2 className="text-primary font-extrabold capitalize mb-12">
          {" "}
          {category.replace("-", " ")}
        </h2>
        <div className="flex flex-col-reverse">
          {category !== "our-solutions" ? (
            <div className="menu-grid">
              {menus
                .filter((menu) => menu.category === category)
                .map((food) => (
                  <Content
                    key={food._id}
                    food={food}
                    cart={cart}
                    setCart={setCart}
                  />
                ))}{" "}
            </div>
          ) : (
            Object.keys(menuCategory).map((category, i) => (
              <div key={i}>
                <h4 className="bg-second text-gray-50 my-8 p-2 capitalize">
                  {i + 1}. {category}
                </h4>
                <div className="menu-grid">
                  {menuCategory[category].map((food) => (
                    <Content
                      key={food._id}
                      food={food}
                      cart={cart}
                      setCart={setCart}
                    />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>{" "}
      <div className="sticky bottom-0">
        <Caption />
        <AddToCart cart={cart} />
      </div>
    </>
  );
};

export default Category;
