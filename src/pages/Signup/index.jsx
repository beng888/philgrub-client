import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import LoginForm from "./LoginForm";
import SubscribeForm from "./SubscribeForm";

const Signup = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row items-center justify-around px-4 py-28 sm:px-12 xl:px-40  gap-x-12 lg:gap-x-20 xl:gap-x-28">
      <LoginForm />
      <MailchimpSubscribe
        url={process.env.REACT_APP_MAILCHIMP_URL}
        render={({ subscribe, status, message }) => (
          <div>
            <SubscribeForm
              onSubmitted={(formData) => subscribe(formData)}
              subscribe={subscribe}
              status={status}
              message={message}
            />
          </div>
        )}
      />
    </div>
  );
};

export default Signup;
