import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";

import { createMessage } from "../../actions/message";
import FormField from "../../components/FormField";
import Button from "../../components/Button";

const Contact = () => {
  const dispatch = useDispatch();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  const [messageData, setMessageData] = useState({
    contact_name: "",
    contact_email: "",
    contact_phone: "",
    contact_subject: "",
    contact_message: "",
  });

  console.log(messageData);

  const {
    contact_name,
    contact_email,
    contact_phone,
    contact_subject,
    contact_message,
  } = messageData;

  const onChange = (e) => {
    setMessageData({
      ...messageData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createMessage(messageData, setMessageData));
  };

  return (
    <div className=" min-h-screen center-content text-gray-200 padding relative">
      <img
        src="/images/contact-bg.jpg"
        alt="contact-bg.jpg"
        className="absolute  h-full object-cover w-full"
      />
      <div
        ref={ref}
        className={` ${
          inView ? "translate-x-0 opacity-100 " : " -translate-x-16 opacity-0"
        } trans-out transform  max-w-4xl mx-auto w-full`}
      >
        <h3>Contact Us</h3>
        <h5 className="my-4">
          Please fill those few fields to help us answer you better.
        </h5>

        <form onSubmit={handleSubmit} className="mt-8">
          <div className="flex flex-col md:flex-row gap-x-6 text-shadow-black-solid">
            {" "}
            <FormField
              value={contact_name}
              onChange={onChange}
              type={"text"}
              name={"contact_name"}
              label="Full name"
              text="text-gray-200"
              required
            />
            <FormField
              value={contact_email}
              onChange={onChange}
              type={"email"}
              name={"contact_email"}
              label="E-mail"
              text="text-gray-200"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row gap-x-6">
            {" "}
            <div className="w-full">
              <FormField
                value={contact_phone}
                onChange={onChange}
                type={"tel"}
                name={"contact_phone"}
                label="Phone"
                text="text-gray-200"
                pattern="[0]{1}[9]{1}[0-9]{9}"
                maxLength="11"
                title="cellphone number"
                required
              />
              <span className="text-xs transform -translate-y-5 absolute ">
                Format:{" "}
                <b className="text-gray-400 tracking-widest">09#########</b>
              </span>
            </div>
            <FormField
              value={contact_subject}
              onChange={onChange}
              type={"text"}
              name={"contact_subject"}
              label="Subject"
              text="text-gray-200"
              required
            />
          </div>

          <FormField
            value={contact_message}
            onChange={onChange}
            type={"textarea"}
            name={"contact_message"}
            label="Message"
            text="text-gray-200"
            minLength="20"
            required
          />
          <div className="text-right">
            <Button btn="btn-secondary">SEND</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
