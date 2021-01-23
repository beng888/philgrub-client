import React from "react";
import { Link } from "react-router-dom";

import Logo from "../Navbar/Logo";
import { navLinks, socials } from "../../static";
import Messager from "./components/Messager/";

const Footer = () => {
  return (
    <div className="w-full py-20 px-4 xl:px-20 flex flex-col gap-12 bg-gray-300 relative overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-20">
        <div className="flex flex-col gap-8 whitespace-nowrap">
          {navLinks.slice(2, 6).map((m, i) => (
            <Link className="hov-link2" key={i} to={m[1]}>
              <h4>{m[0]}</h4>
            </Link>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:mx-auto">
          <p className="max-w-xl tracking-widest text-sm leading-7">
            PhilGrub Food Solution, your prepared meals and Bistro meals
            subscription service delivered to your door every week. Save more
            time and offer yourself the finer things in life and in the kitchen.
          </p>
          <div className="border-b border-secondary w-32 md:border-b-0 sm:border-l md:w-0 md:h-24" />
          <div className="flex flex-col">
            <p
              onClick={() => window.open("tel:09296023766")}
              className="hov-link-text mb-2"
            >
              09296023766
            </p>
            <p
              onClick={() => window.open("mailto:lawrenceardosa@gmail.com")}
              className="hov-link-text"
            >
              lawrenceardosa@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-12 sm:flex-row justify-between sm:items-end text-green-800">
        <div className="lg:flex gap-8 items-end">
          <Logo />
          <a href="/https://lawrenceardosa.netlify.app/" className="hov-link2">
            <br />
            Operated by Lawrence Ardosa
          </a>
        </div>
        <div className="flex justify-between gap-20">
          {socials.map((icon, i) => (
            <a key={i} href={icon[1]} target="_blank" rel="noreferrer">
              <i className={icon[0]} />
            </a>
          ))}
        </div>
      </div>
      <Messager />
    </div>
  );
};

export default Footer;
