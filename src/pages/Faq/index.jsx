import React from "react";
import Bubble from "../ContactUs/Bubble";

import { faq } from "../../static";
import Faqs from "./Faqs";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

console.log(faq);
const Faq = () => {
  return (
    <div>
      <div className="center-content min-h-screen overflow-hidden sm:overflow-visible relative">
        <img
          src="/images/faqs.jpg"
          alt="boy-on-phone.jpg"
          className="w-full object-cover h-560"
        />
        <Bubble />
        <div className="absolute bg-white w-full h-24 bottom-0 sm:hidden " />
      </div>
      <div className="padding flex flex-col gap-28 my-8">
        {faq.map((f, i) => (
          <Faqs key={i} f={f} />
        ))}
      </div>
      <div className="relative h-450 padding flex items-center">
        <img
          src="/images/faq.jpg"
          alt="faq.jpg"
          className=" object-cover min-w-full h-full absolute inset-0 -z-20"
        />
        <div className=" bg-green-900 bg-opacity-90 -z-10 absolute inset-0" />
        <div className=" text-gray-50 max-w-lg tracking-widest leading-loose">
          <p className="font-bold text-lg sm:text-2xl">
            You don't find the answer to your question?
          </p>
          <p className="mt-4 mb-6">
            Contact us via our online chat, by email or by phone.
          </p>
          <Link to="/contact-us">
            {" "}
            <Button btn="btn-secondary">
              CONTACT US <i className="fas fa-chevron-right" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Faq;
