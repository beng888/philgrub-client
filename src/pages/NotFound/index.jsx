import React from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo.svg";

const NotFound = () => {
  return (
    <div className="center-content flex-col lg:flex-row min-h-screen bg-seventh gap-12 py-40 padding">
      <img src={logo} alt="logo" className="max-w-xs" />
      <div>
        <p className="text-3xl sm:text-5xl font-bold tracking-widest text-red-300">
          Oh! I think <br /> you got lost!
        </p>
        <h5 className="mt-12 hov-link-text text-gray-100">
          <Link to="/">
            {" "}
            TAKE ME TO THE HOME PAGE <i className="fas fa-chevron-right" />
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default NotFound;
