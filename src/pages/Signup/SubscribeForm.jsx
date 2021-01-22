import React, { useState } from "react";
import { Link } from "react-router-dom";

import FormField from "../../components/FormField";
import Button from "../../components/Button";

const SubscribeForm = ({ status, message, subscribe }) => {
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    subscribe(email);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <h1 className="text-green-800 transition-spacing duration-700">
        Subscribe to PhilGrub
      </h1>
      <FormField
        value={email}
        onChange={onChange}
        type={"email"}
        name={"email address"}
        required
      />
      {status === "sending" && (
        <span className="text-blue-500">sending...</span>
      )}
      {status === "error" && (
        <span
          className="text-red-500"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <span className="text-green-500">Subscribed !</span>
      )}{" "}
      <br />
      <h6 className="text-primary">
        See firsthand our new offers and promotions
      </h6>
      <p className="py-4 tracking-widest text-sm">
        Your personal data will be used to support your experience throughout
        this website, to manage access to your account, and for other reasons
        described in our{" "}
        <span>
          <Link to="/privacy-policies" className="hov-link-text2">
            {" "}
            privacy policy{" "}
          </Link>
        </span>
        .
      </p>
      <Button
        btn="btn-primary"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Subscribe
      </Button>
    </form>
  );
};

export default SubscribeForm;
