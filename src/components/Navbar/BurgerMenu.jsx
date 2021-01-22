import React from "react";
import { Link, NavLink } from "react-router-dom";

import { iconlinks, navLinks, socials } from "../../static";
import Logo from "./Logo";
import NavIcons from "./NavIcons";
import logo from "../../images/logo.svg";

const BurgerMenu = () => {
  return (
    <>
      <div className="h-full p-4 portrait:p-8 text-gray-50 flex flex-col items-start justify-between">
        <div className="flex w-full justify-between items-start">
          <Logo />
          <i
            tabIndex="0"
            className=" text-2xl tab focus:-translate-x-full far fa-window-close"
          ></i>
        </div>

        {navLinks.map((menu) => (
          <div key={menu[0]}>
            <NavLink
              className="hov-link1"
              activeStyle={{ borderBottom: "4px solid #A37B3B" }}
              to={menu[1]}
            >
              {menu[0]}
            </NavLink>
          </div>
        ))}
        <div className="flex gap-x-12">
          <NavIcons />
        </div>
        <div className="w-full flex justify-center gap-x-24">
          {socials.map((icon, i) => (
            <i key={i} className={icon} />
          ))}
        </div>
      </div>
      <div className="fixed inset-0 flex flex-col transform translate-y-1/4 justify-center bg-sixth rounded-t-full -z-10">
        <img
          src={logo}
          alt="logo"
          className="sm:h-32 md:h-48 hidden sm:block"
        />
      </div>
    </>
  );
};

export default BurgerMenu;
