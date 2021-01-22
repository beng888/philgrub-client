import React from "react";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router";

const Bubble = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <div ref={ref} className="absolute" />
      <div
        className={`${
          inView ? "scale-100 opacity-100" : "scale-75 opacity-0"
        } transform origin-top-left delay-out-1 absolute h-96 w-96 p-72 lg:p-80 xl:p-96 bg-fourth rounded-full translate-y-56 sm:translate-y-4 -left-60  sm:-left-48`}
      >
        <div
          className={`flex flex-col max-w-14-rem sm:max-w-xs tracking-widest gap-y-2 sm:gap-y-6 left-64 sm:left-52 top-10 sm:top-28  lg:left-1/3 lg:top-1/3 absolute ${
            path !== "/contact-us" && "transform translate-y-12"
          }`}
        >
          <p
            className={`${
              inView
                ? "translate-x-0 opacity-100"
                : " -translate-x-12 opacity-0"
            } transform transition duration-700 ease-out delay-1200 font-bold sm:text-4xl ${
              path !== "/privacy-policies" && "whitespace-nowrap"
            } `}
          >
            {path === "/contact-us"
              ? "Contact us"
              : path === "/faq"
              ? "FAQ"
              : "Terms and conditions"}
          </p>

          <p
            className={`${
              inView
                ? "translate-x-0 opacity-100"
                : " -translate-x-12 opacity-0"
            } transform transition duration-700 ease-out delay-1500 text-xs sm:text-base leading-5 sm:leading-9`}
          >
            {path === "/contact-us"
              ? `
            Please share your comments with us or simply tell us how you feel.
            Contact us by our online chat, by email or by the good old phone!`
              : path === "/faq"
              ? `You have any questions about the subscription? About our products? Take a look at our FAQ and if you don't find your answer, please contact us via our online chat.`
              : `The general conditions, a long and tedious text, but oh how important, for us and for you!`}
          </p>
          {path === "/contact-us" && (
            <div>
              <p
                onClick={() => window.open("tel:09296023766")}
                className={`${
                  inView
                    ? "translate-x-0 opacity-100"
                    : " -translate-x-12 opacity-0"
                } transform transition duration-700 ease-out delay-1700 text-sm sm:text-lg font-semibold  mb-2`}
              >
                <span className="hover:text-secondary trans-out cursor-pointer">
                  09296023766
                </span>
              </p>
              <p
                onClick={() => window.open("mailto:lawrenceardosa@gmail.com")}
                className={`${
                  inView
                    ? "translate-x-0 opacity-100"
                    : " -translate-x-12 opacity-0"
                } transform transition duration-700 ease-out delay-2000 text-sm sm:text-lg font-semibold `}
              >
                <span className="hover:text-secondary trans-out cursor-pointer">
                  {" "}
                  lawrenceardosa@gmail.com
                </span>
              </p>
            </div>
          )}
        </div>
      </div>{" "}
    </>
  );
};

export default Bubble;
