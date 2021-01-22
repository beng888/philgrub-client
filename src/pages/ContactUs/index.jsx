import React from "react";

import Bubble from "./Bubble";
import YourFeedback from "./YourFeedback";
import Contact from "./Contact";

const ContactUs = () => {
  return (
    <div>
      <div className="center-content min-h-screen overflow-hidden sm:overflow-visible relative">
        <img
          src="/images/boy-on-phone.jpg"
          alt="boy-on-phone.jpg"
          className=" min-w-max h-560"
        />
        <Bubble />
        <div className="absolute bg-white w-full h-24 bottom-0 sm:hidden " />
      </div>

      <YourFeedback />

      <Contact />
    </div>
  );
};

export default ContactUs;
