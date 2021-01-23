import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Parallax from "react-rellax";

import { sections } from "../../static";
import Sections from "./Sections";

const Solutions = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [bg, setBg] = useState("bg-first");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY <= 500) {
        setBg("bg-first");
      } else if (window.scrollY <= 1400) {
        setBg("bg-second");
      } else if (window.scrollY <= 2300) {
        setBg("bg-eight");
      } else if (window.scrollY >= 2300) {
        setBg("bg-seventh");
      }
    });
    return () => {
      window.removeEventListener("scroll", setBg);
    };
  }, []);

  console.log(bg);

  return (
    <div
      className={`trans-out tracking-widest pt-20 portrait:pt-0 ${bg} overflow-hidden`}
    >
      <section className="min-h-screen w-full center-content px-8">
        <img
          src="/images/sol.png"
          alt="lasagna"
          className="absolute right-0  transform translate-y-32 w-6/12 hidden md:block  object-contain"
        />
        <div ref={ref} className="max-w-3xl md:pr-32 z-10">
          <h2 className={`delay-out-1 hide ${inView && "show"} self-start`}>
            Choose your solution
          </h2>
          <div className={`delay-out-2 hide ${inView && "show"}`}>
            <p className="leading-8 my-4">
              PhilGrub has developed 2 solutions to fill your daily menus of
              healthy meals and quality food. Whether it is prepared meals or
              bistro meals , each option is thought out to allow you to eat a
              balanced diet, save time and buy local.
            </p>
            <p>Discover our 2 solutions below!</p>
          </div>
        </div>
      </section>{" "}
      <Parallax speed={1}>
        <img
          src="/images/sol-1.png"
          alt="food-1"
          className=" rellax absolute -left-20"
        />
        <img
          src="/images/sol-4.png"
          alt="food-3"
          className="rellax absolute mt-^1.25hscreen -left-20"
        />
        <img
          src="/images/sol-6.png"
          alt="food-6"
          className="rellax absolute mt-^2hscreen left-1/2"
        />
        <img
          src="/images/sol-3.png"
          alt="food-3"
          className="rellax absolute mt-^3hscreen left-1/2"
        />
      </Parallax>
      <Parallax speed={6}>
        <img
          src="/images/sol-2.png"
          alt="food-2"
          className="rellax absolute mt-^hscreen left-1/2"
        />
        <img
          src="/images/sol-5.png"
          alt="food-5"
          className="rellax absolute mt-^2.25hscreen left-1/3"
        />
        <img
          src="/images/sol-4.png"
          alt="food-4"
          className="rellax absolute mt-^6hscreen left-1/2"
        />
      </Parallax>
      <Parallax speed={3}>
        <img
          src="/images/sol-3.png"
          alt="food-3"
          className="rellax absolute mt-72 -right-28"
        />
        <img
          src="/images/sol-7.png"
          alt="food-7"
          className="rellax absolute mt-^1.75hscreen -right-20"
        />
      </Parallax>
      <Parallax speed={2}>
        <img
          src="/images/sol-5.png"
          alt="food-5"
          className="rellax absolute mt-^3hscreen"
        />
        <img
          src="/images/sol-1.png"
          alt="food-1"
          className="rellax absolute mt-^3.25hscreen left-1/4"
        />
      </Parallax>
      {sections.map((sec, i) => (
        <Sections key={i} i={i} sec={sec} />
      ))}
    </div>
  );
};

export default Solutions;
