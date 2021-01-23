import React from "react";
import Logo from "../../images/logo.svg";

const Updating = () => {
  return (
    <div className="absolute inset-0 bg-gray-700 bg-opacity-20 center-content">
      <img src={Logo} alt="logo" className="h-10 animate-bounce" />
    </div>
  );
};

export default Updating;
