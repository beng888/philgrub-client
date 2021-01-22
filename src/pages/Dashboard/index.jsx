import React from "react";
import { Outlet } from "react-router-dom";

import Navigation from "./Navigation";

const Dashboard = () => {
  return (
    <div className="md:flex min-h-screen bg-gray-100">
      <Navigation />
      <div className="flex-1 px-4 py-12 md:py-40 sm:px-8 md:px-16 xl:px-32 bg-blue-100 center-content relative">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
