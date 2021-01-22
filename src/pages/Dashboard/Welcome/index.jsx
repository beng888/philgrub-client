import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { logoutUser } from "../../../actions/auth";

const Welcome = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  return (
    <div className="flex flex-col gap-y-4">
      <p className="text-3xl lg:text-5xl font-bold">
        Hello <span className="text-tertiary capitalize">{user.username}</span>{" "}
      </p>
      <h6 className="text-tertiary">
        &#40;not {user.username}?{" "}
        <b onClick={(e) => dispatch(logoutUser())} className="hov-link-text">
          Log Out
        </b>
        &#41;
      </h6>
      <h5 className="leading-8">
        {user.role === "admin" && "Welcome Admin!!. "}
        From your account dashboard you can view your{" "}
        <Link to="/dashboard/orders" className="hov-link-text font-extrabold">
          recent orders
        </Link>
        , manage {user.role === "user" && "your"}{" "}
        <Link
          to={`${
            user.role === user ? "/dashboard/addresses" : "/dashboard/admin"
          }`}
          className="hov-link-text font-extrabold"
        >
          {user.role === "user"
            ? "shipping and billing addresses"
            : "The PhilGrub Site"}
        </Link>
        , and{" "}
        <Link
          to="/dashboard/accountdetails"
          className="hov-link-text font-extrabold"
        >
          edit your password and account details.
        </Link>
      </h5>
    </div>
  );
};

export default Welcome;
