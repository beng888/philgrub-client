import React from "react";
import { Outlet } from "react-router-dom";

const Menus = () => {
  return (
    <div className="flex justify-around w-full">
      <Outlet />
    </div>
  );
};

export default Menus;
