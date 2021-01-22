import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logoutUser } from "../../actions/auth";
import { dashboardLinks } from "../../static";

const Navigation = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="md:sticky  top-0 max-h-screen bg-sixth md:w-1/3 divide-y divide-gray-50 flex flex-col overflow-y-auto">
      <div className="flex flex-col flex-1 justify-center items-start md:mx-auto text-gray-50 lg:text-2xl gap-8 p-8 pt-32">
        <NavLink
          end
          activeStyle={{ borderBottom: "4px solid #A37B3B" }}
          className="hov-link1"
          to="/dashboard"
        >
          Dashboard
        </NavLink>
        {dashboardLinks.slice(0, 6).map((link, i) => (
          <NavLink
            key={i}
            activeStyle={{ borderBottom: "4px solid #A37B3B" }}
            className="hov-link1"
            to={link[0]}
          >
            {link[1]}
          </NavLink>
        ))}
        {user && user.role === "admin" && (
          <NavLink
            activeStyle={{ borderBottom: "4px solid #A37B3B" }}
            className="hov-link1"
            to="/dashboard/admin"
          >
            Admin
          </NavLink>
        )}
      </div>
      <div className="p-8">
        <p
          onClick={(e) => dispatch(logoutUser())}
          className="md:mx-auto text-gray-50 font-bold tracking-widest hov-link-text w-fit"
        >
          X &nbsp;&nbsp;LOGOUT
        </p>
      </div>
    </div>
  );
};

export default Navigation;
