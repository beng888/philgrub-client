import React from "react";
import { Link } from "react-router-dom";
import { sub } from "../../static";
import logo from "../../images/logo.svg";
const Logo = ({ path, change }) => {
  return (
    <Link
      to="/"
      className={`${
        path === "/delivery" && change && "text-gray-100"
      } flex items-center gap-x-2`}
    >
      <img src={logo} alt="logo" className="h-10 lg:h-14" />
      <div>
        <h1 className=" text-2xl lg:text-4xl">PhilGrub</h1>
        <p className="flex justify-between text-xs">
          {sub.map((s, i) => (
            <b key={i}>{s}</b>
          ))}
        </p>
      </div>
    </Link>
  );
};

export default Logo;
