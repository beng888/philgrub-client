import React, { useState } from "react";
import Button from "../../components/Button";

const Validate = ({ setNotFound, delivery }) => {
  const [validation, setValidation] = useState(null);

  const handleClick = () => {
    setNotFound(false);

    if (validation) {
      if (delivery.map((d) => d.location).some((f) => f === validation)) {
        setNotFound(false);
        console.log(validation);
      } else {
        setNotFound(true);
        window.scrollTo(0, 0);
      }
    }
  };

  return (
    <div className="mb-auto pt-32 sm:sticky top-0 min-h-screen text-center sm:text-left">
      <img
        src="/images/delivery.png"
        alt="delivery.png"
        className="w-60 mx-auto"
      />{" "}
      <br />
      <p className="text-2xl font-bold text-quaternary">
        Look for your <span className="text-gray-100">code postal</span> to know
        if we deliver to your region
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-12 py-8">
        <input
          value={validation}
          onChange={(e) => setValidation(e.target.value)}
          type="text"
          placeholder="validate"
          className=" bg-transparent outline-none border-b  sm:py-4 flex-1"
        />
        <a href={`#${validation}`} onClick={handleClick}>
          {" "}
          <Button btn="btn-secondary">VALIDATE</Button>
        </a>
      </div>
      <p className="font-semibold leading-loose text-lg ">
        Your order will be delivered to your address each Tuesday between 8am
        and 5pm. We deliver to several cities in the province of Quebec, at a
        fee of 10$+tx.
      </p>
    </div>
  );
};

export default Validate;
