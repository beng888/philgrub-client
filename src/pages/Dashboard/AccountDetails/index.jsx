import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateUser } from "../../../actions/auth";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import { useNavigate } from "react-router";

const AccountDetails = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const [userData, setUserData] = useState({
    firstname: user.firstname,
    lastname: user.lastname,
    username: user.username,
    email: user.email,
    currentPassword: user.currentPassword,
    newPassword: "",
    confirmPassword: "",
  });
  const {
    firstname,
    lastname,
    username,
    email,
    currentPassword,
    newPassword,
    confirmPassword,
  } = userData;

  const onChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const updateAccountHandler = (e) => {
    e.preventDefault();
    setError("");
    if (newPassword !== confirmPassword) {
      return setError("Passwords don't match");
    }

    dispatch(updateUser(userData, navigate));
  };

  return (
    <div className="w-full">
      {" "}
      <form onSubmit={updateAccountHandler}>
        {" "}
        <div className="flex flex-col sm:flex-row gap-x-12">
          <FormField
            value={firstname}
            onChange={onChange}
            type={"text"}
            name={"firstname"}
            required
          />
          <FormField
            value={lastname}
            onChange={onChange}
            type={"text"}
            name={"lastname"}
            required
          />
        </div>
        <FormField
          value={username}
          onChange={onChange}
          type={"text"}
          name={"username"}
          label={"display name"}
          required
        />
        <p className="text-xs transform italic tracking-widest">
          This will be how your name will be displayed in the account section
          and in reviews
        </p>
        <FormField
          value={email}
          onChange={onChange}
          type={"email"}
          name={"email"}
          label={"email address"}
          required
        />
        <h4 className="text-primary py-4">Password change</h4>
        <FormField
          value={currentPassword}
          onChange={onChange}
          type={"password"}
          name={"currentPassword"}
          label={"current password (leave blank to leave unchanged)"}
        />
        <FormField
          value={newPassword}
          onChange={onChange}
          type={"password"}
          name={"newPassword"}
          label={"new password (leave blank to leave unchanged)"}
        />
        <FormField
          value={confirmPassword}
          onChange={onChange}
          type={"password"}
          name={"confirmPassword"}
          label={"confirm password"}
        />
        {error && <span className="text-red-500 font-semibold ">{error}</span>}{" "}
        <br />
        <Button btn="btn-primary">SAVE CHANGES</Button>
      </form>
    </div>
  );
};

export default AccountDetails;
