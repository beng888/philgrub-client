import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { registerUser, loginUser, setError } from "../../actions/auth";
import FormField from "../../components/FormField";
import Button from "../../components/Button";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [signin, setSignin] = useState(false);
  const [match, setMatch] = useState(true);

  console.log(`${signin} to sign in`);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { username, email, password, confirmPassword } = userData;

  const onChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMatch(true);
    signin === true
      ? dispatch(registerUser(userData))
      : dispatch(loginUser(userData));

    password !== confirmPassword && setMatch(false);
  };

  useEffect(() => {
    dispatch(setError(null));
  }, [signin]);

  const switchLog = (e) => {
    if (signin === false) {
      setSignin(true);
    } else if (signin === true) {
      setSignin(false);
    }
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className={`w-full ${signin && "mb-8"}`}
    >
      <h1
        className={`text-green-800 transition-spacing duration-700 ${
          !signin ? "-mb-20" : "-mb-0"
        }`}
      >
        {!signin ? "Log in to your account" : "Create an account"}
      </h1>

      <div
        className={`tranform trans-out  ${
          signin ? " opacity-100" : " opacity-0"
        }`}
      >
        <FormField
          value={username}
          onChange={onChange}
          type={"text"}
          name={"username"}
          required
        />
      </div>

      <FormField
        value={email}
        onChange={onChange}
        type={"email"}
        name={"email"}
        required
      />
      <FormField
        value={password}
        onChange={onChange}
        type={"password"}
        name={"password"}
        required
      />

      <div
        className={`tranform trans-out  ${
          signin ? " opacity-100" : " opacity-0"
        }`}
      >
        <FormField
          value={confirmPassword}
          onChange={onChange}
          type={"password"}
          name={"confirmPassword"}
          required
        />

        {!match && (
          <span className="text-red-500 font-semibold">
            Passwords don't match
          </span>
        )}
      </div>
      <div
        className={`transform trans-out ${
          !signin ? "-translate-y-20" : "translate-y-0"
        }`}
      >
        <div
          onClick={switchLog}
          className="hov-link-text2 flex portrait:justify-end"
        >
          {!signin ? "No account yet?" : "Got an account?"}
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center whitespace-nowrap">
          <Button btn="btn-primary">{!signin ? "Log In" : "Sign Up"}</Button>
          <Link
            to="/lost-password"
            className="hov-link-text2 whitespace-nowrap text-xs lg:text-base"
          >
            LOST YOUR PASSWORD?
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
