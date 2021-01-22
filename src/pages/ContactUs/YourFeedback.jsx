import React from "react";
import { useInView } from "react-intersection-observer";

import logo from "../../images/logo.svg";

const YourFeedback = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <div
      ref={ref}
      className={`${
        inView ? "translate-x-0 opacity-100 " : " -translate-x-16 opacity-0"
      } trans-out transform max-w-4xl mx-auto  mt-16 mb-28 font-semibold text-lg tracking-widest leading-8 p-4 `}
    >
      <div className="flex items-center gap-4">
        <img src={logo} alt="logo" className="h-10 lg:h-14" />
        <h3>Your feedback</h3>
      </div>
      <p className="text-gray-500 pt-4 pb-8">
        We are always looking to get better and better, because we want you to
        enjoy our food so you can have more time to do whatever pleases you!
      </p>
      <p className="text-gray-600">
        Please don’t hesitate to let us know how was your experience in terms of
        food taste, delivery, product in general. We are always happy to hear
        from you. Thank you in advance!
      </p>
    </div>
  );
};

export default YourFeedback;
