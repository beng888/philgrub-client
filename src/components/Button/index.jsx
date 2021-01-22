import React from "react";

const index = ({ children, btn, onClick, disabled }) => {
  return (
    <button
      className={`${btn} ${
        disabled && "cursor-not-allowed opacity-50"
      } whitespace-nowrap`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      <div className="absolute rounded-full h-96 inset-0 m-auto bg-gray-100 bg-opacity-10 transform trans-linear translate-y-56 group-hover:translate-y-0" />
    </button>
  );
};

export default index;
