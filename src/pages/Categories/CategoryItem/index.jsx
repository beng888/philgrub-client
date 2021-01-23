import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import Button from "../../../components/Button";
import Loader from "../../../components/Loader";
import Caption from "../Category/Caption";

const CategoryItem = () => {
  const menus = useSelector((state) => state.menus);
  const [open, setOpen] = useState(false);
  const { slug } = useParams();

  const grub = menus.find((m) => m.title === slug);

  console.log(grub);

  return grub && grub ? (
    <>
      <div className="grid sm:grid-cols-2 padding gap-12 text-gray-600 capitalize mb-40">
        <a href={grub.image.image_path} target="_blank" rel="noreferrer">
          <img src={grub.image.image_path} alt={grub.image.originalname} />
        </a>
        <div className="flex flex-col justify-between gap-4">
          <div className="flex justify-between items-center">
            {" "}
            <Link to={`/categories/${grub.category}`}>
              {" "}
              <Button btn="btn-secondary-sm">{grub.category}</Button>
            </Link>
            <div className="flex text-secondary" onClick={() => setOpen(!open)}>
              {grub.captions.map((c) => (
                <div
                  key={c.id}
                  className={`px-1 mx-1  center-content cursor-pointer hover:opacity-50 border-2 rounded-full relative`}
                >
                  <i className={`fas ${c.logo} text-2xl`} />
                  <p className="font-semibold text-white  z-10 text-shadow-black-solid absolute">
                    {c.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <h1>{grub.title}</h1>
          <h6>
            ₱ {grub.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00{" "}
          </h6>
          <h5>
            Serving: <span className="font-normal">{grub.servings}</span>{" "}
          </h5>
          <h5>
            Ingredients:{" "}
            <pre className="font-normal whitespace-pre-wrap">
              {grub.ingredients}
            </pre>{" "}
          </h5>
          {grub.contain && (
            <h5>
              Contains: <span className="font-normal">{grub.contain}</span>{" "}
            </h5>
          )}
          {grub.mayContain && (
            <h5>
              May contain:{" "}
              <span className="font-normal">{grub.mayContain}</span>{" "}
            </h5>
          )}
          <Link
            to="/categories/our-solutions"
            className="self-center sm:self-start"
          >
            <Button btn="btn-primary">SKIP TO THE MENU</Button>
          </Link>
        </div>
      </div>{" "}
      <div className="sticky bottom-0">
        <Caption open={open} />
      </div>
    </>
  ) : (
    <Loader />
  );
};

export default CategoryItem;
