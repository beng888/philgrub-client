import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

import { createMessage } from "../../actions/message";
import FormField from "../../components/FormField";
import Button from "../../components/Button";
// import bg from "../../images/contact-bg.jpg";

const Contact = () => {
  const dispatch = useDispatch();
  const { errors } = useSelector((state) => state.errors);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });
  const isFirstRun = useRef(true);

  const initial_state = {
    contact_name: "",
    contact_email: "",
    contact_phone: "",
    contact_subject: "",
    contact_message: "",
  };

  const [messageData, setMessageData] = useState(initial_state);

  const onChange = (e) => {
    setMessageData({
      ...messageData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createMessage(messageData));
  };

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    errors === null && setMessageData(initial_state);
  }, [handleSubmit]);
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
              value={messageData.contact_name}
              onChange={onChange}
              type={"text"}
              name={"contact_name"}
              required
              label="Full name"
              text="text-gray-200"
            />
            <FormField
              value={messageData.contact_email}
              onChange={onChange}
              type={"email"}
              name={"contact_email"}
              required
              label="E-mail"
              text="text-gray-200"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-x-6">
            {" "}
            <FormField
              value={messageData.contact_phone}
              onChange={onChange}
              type={"number"}
              name={"contact_phone"}
              label="Phone"
              text="text-gray-200"
            />
            <FormField
              value={messageData.contact_subject}
              onChange={onChange}
              type={"text"}
              name={"contact_subject"}
              required
              label="Subject"
              text="text-gray-200"
            />
          </div>

          <FormField
            value={messageData.contact_message}
            onChange={onChange}
            type={"textarea"}
            name={"contact_message"}
            required
            label="Message"
            text="text-gray-200"
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
