import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";

import FormField from "../../components/FormField";
import Button from "../../components/Button";
import { setAlert } from "../../actions/alert";
import API from "../../utils/API";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const resetPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      return setError("Passwords don't match");
    }

    try {
      const { data } = await API.put(
        `/auth/passwordreset/${token}`,
        {
          password,
        },
        config
      );

      console.log(data);
      navigate("/signup");
      dispatch(setAlert(data.data, "success", 20000));
    } catch (error) {
      setError(error.response.data.error);
    }
  };
  return (
    <div className=" pt-48 pb-24 padding-x tracking-widest">
      <div className="max-w-2xl">
        <p>Enter a new password below.</p>
        <br />
        <form onSubmit={resetPasswordHandler}>
          <FormField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={"password"}
            name={"password"}
            label="New password"
            required
          />
          <FormField
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type={"password"}
            name={"confirmPassword"}
            label="Re-enter new password"
            required
          />
          {error && (
            <span className="text-red-500 font-semibold ">{error}</span>
          )}{" "}
          <br />
          <Button btn="btn-primary">SAVE</Button>
        </form>{" "}
      </div>
    </div>
  );
};

export default ResetPassword;
