import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const Veggie = () => {
  const [ref, inView] = useInView();
  return (
    <div className="md:w-1/3 flex justify-center overflow-hidden">
      <img
        ref={ref}
        src="/images/veg.png"
        alt="veggies"
        className={`delay-out-3 opacity-0 my-8 object-contain transform -rotate-12 -translate-x-10 max-h-80 max-w-xs md:max-h-full md:max-w-full ${
          inView && "opacity-100"
        }`}
      />
      <Link
        to="/solutions"
        className={`group scale-0 delay-out-4 shadow-black absolute bg-gray-50 rounded-full p-4 right-8 md:right-2/3 transform -translate-y-16 md:translate-y-40 ${
          inView && "scale-100"
        }`}
      >
        <img
          src="/images/text.svg"
          alt="text"
          className="h-28 w-28 animate-spin-slow group-hover:animate-ping"
        />
        <img
          src="/images/logo.svg"
          alt="logo"
          className="absolute h-16 w-16 inset-0 m-auto transform trans-out group-hover:scale-150"
        />
      </Link>

      <div
        className={` h-dscreen w-dscreen bg-fourth absolute overflow-hidden delay-out-1 rounded-full transform  md:-translate-y-1/4 -z-10 md:-translate-x-1/3 md:mr-96 ${
          inView ? "translate-x-36 scale-100 opacity-100" : "opacity-0 scale-75"
        }`}
      />
    </div>
  );
};

export default Veggie;
