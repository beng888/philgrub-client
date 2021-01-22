import React, { useState } from "react";

import FormField from "../../components/FormField";
import Button from "../../components/Button";
import API from "../../utils/API";

const LostPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();
    setError("");

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await API.post(
        "/auth/forgotpassword",
        { email },
        config
      );

      setSuccess(data.data);
    } catch (error) {
      setError("That email is not registered");
      // setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className=" pt-48 pb-24 padding-x tracking-widest">
      {success ? (
        <div>
          <div className="success">{success}</div>
          <p className="text-xs tracking-widest mt-8">
            A password reset email has been sent to the email address on file
            for your account, but may take several minutes to show up in your
            inbox. With at least 10 minutes before rendered invalid.
          </p>
        </div>
      ) : (
        <div className="sm:ml-12 lg:ml-24 xl:ml-48 flex flex-col  max-w-xl leading-loose">
          <p className="tracking-widest mb-8">
            Lost your password? Please enter your username or email address. You
            will receive a link to create a new password via email.
          </p>

          <form onSubmit={forgotPasswordHandler}>
            <FormField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="forgotPassword"
              required
            />{" "}
            {error && (
              <span className="text-red-500 font-semibold tracking-widest">
                {error}
              </span>
            )}{" "}
            <br />
            <Button btn="btn-primary">RESET PASSWORD</Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LostPassword;
