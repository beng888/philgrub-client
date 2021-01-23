import React from "react";
import { Link } from "react-router-dom";

import Button from "../../../components/Button";

const CategoryList = () => {
  const solutionLinks = [
    {
      link: "/categories/our-solutions",
      img: "/images/category1.jpg",
      title: "Our solutions",
    },
    {
      link: "/categories/prepared",
      img: "/images/category2.jpg",
      title: "Prepared",
    },
    {
      link: "/categories/bistro",
      img: "/images/category3.jpg",
      title: "Bistro",
    },
  ];

  return (
    <div className="padding ">
      <h1 className="pb-6 text-primary font-bold">Solutions</h1>
      <div className="menu-grid">
        {solutionLinks.map((l) => (
          <div key={l.title} className="grid text-center">
            {" "}
            <Link to={l.link}>
              {" "}
              <img
                src={l.img}
                alt={l.img}
                className="h-80 w-full object-cover"
              />{" "}
              <h3 className="py-4">{l.title}</h3>
            </Link>
            <Link to={l.link}>
              <Button btn="btn-primary">SELECT OPTIONS</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
