import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import CheckUser from "../../utils/CheckUser";

import { navLinks } from "../../static";
import BurgerMenu from "./BurgerMenu";
import Logo from "./Logo";
import NavIcons from "./NavIcons";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  console.log(path);
  const [change, setChange] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setChange(false);
      } else setChange(true);
    });
  }, []);

  return (
    <div
      className={`${
        (path === "/contact-us" && change) || (path === "/faq" && change)
          ? "py-8 bg-opacity-100"
          : change
          ? "py-8 bg-opacity-0"
          : "py-4 bg-opacity-100"
      } transform transition-padding duration-1000 ease-in-out fixed w-full bg-gray-50 px-4 portrait:px-8 flex items-center justify-between z-50 text-green-800`}
    >
      <Logo path={path} change={change} />
      <CheckUser />

      <div className="lg:hidden">
        <div tabIndex="0" className="group tab">
          <i className="fas fa-bars text-3xl portrait:text-5xl" />
          <div className="fixed h-screen cursor-default bg-green-800 inset-0 trans-out delay-100 transform -translate-x-full group-focus:translate-x-0">
            <BurgerMenu />
          </div>
        </div>
      </div>
      <div
        className={`${
          path === "/delivery" && change && "text-gray-100"
        } gap-x-8 items-center hidden lg:flex`}
      >
        {navLinks.slice(0, 2).map((link) => (
          <NavLink
            key={link[0]}
            activeStyle={{ borderBottom: "4px solid #A37B3B" }}
            to={link[1]}
            className="hov-link1"
          >
            {link[0]}
          </NavLink>
        ))}
        <NavIcons />
      </div>
    </div>
  );
};

export default Navbar;
