import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

import Button from "../../components/Button";

const Intro = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div className="md:w-2/3 flex flex-col justify-center items-start max-w-4xl my-32 mx-8 md:mx-auto md:px-20 gap-y-5">
      <h2
        ref={ref}
        className={`delay-out-1 tracking-widest font-bold hide ${
          inView && "show"
        }`}
      >
        Running out of meal ideas? Philiber has you covered.
      </h2>
      <h5 className={`delay-out-2 tracking-widest hide ${inView && "show"}`}>
        Prepared meals that bring back the joy of eating.
      </h5>
      <p
        className={`delay-out-3 leading-8 tracking-widest hide ${
          inView && "show"
        }`}
      >
        Philiber’s locally made, mouth-watering and hearty prepared and bistro
        meals will give you an entirely new appreciation for Manila's
        world-class food scene. Refined yet comforting meals delivered straight
        to your door every Tuesday.
      </p>
      <Link to="/solutions">
        <Button btn={`btn-primary delay-out-4 btn hide ${inView && "show"}`}>
          SO, SHALL WE START? &nbsp;
          <i className="fas fa-chevron-right" />
        </Button>
      </Link>
    </div>
  );
};

export default Intro;
