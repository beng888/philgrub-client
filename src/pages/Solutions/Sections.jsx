import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

import Button from "../../components/Button";

const Sections = ({ sec, i }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <section
      ref={ref}
      key={i}
      className={`min-h-1-1/4 flex items-center w-full text-gray-200 px-8 mt-12 portrait:mt-0`}
    >
      {" "}
      <div className="max-w-3xl sm:pl-20 md:pl-40 flex flex-col gap-4 z-10">
        <h2 className={`trans-out hide ${inView && "show"} `}>{sec.title}</h2>
        <h4
          className={`delay-out-1 text-yellow-600 leading-8 hide ${
            inView && "show"
          }`}
        >
          {sec.sub1}
        </h4>
        <h6
          className={`delay-out-2 hide leading-6 ${
            inView && "show"
          } text-shadow-black`}
        >
          {sec.sub2} <br /> <br />
          {sec.sub3}
        </h6>
        <div className={`delay-out-3 hide ${inView && "show"}`}>
          <Link to="/categories/our-solutions">
            <Button btn="btn-secondary">
              GO TO MENU&nbsp;
              <i className="fas fa-chevron-right" />{" "}
            </Button>
          </Link>

          <h5 className="flex items-center mt-4">
            {sec.next}&nbsp;{" "}
            <p className="animate-pulse">
              <i className={sec.icon} />
            </p>
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Sections;
