import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createMessage } from "../../../../actions/message";

const Form = ({ setOpen }) => {
  const dispatch = useDispatch();
  const { errors } = useSelector((state) => state.errors);

  const [messageData, setMessageData] = useState({
    contact_name: "",
    contact_email: "",
    contact_subject: "",
    contact_message: "",
  });
  const {
    contact_name,
    contact_email,
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
    <div className="max-h-screen  overflow-auto w-screen max-w-min">
      <div className="flex justify-center p-3 bg-white rounded-t-lg">
        <p>Leave a message</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="m-4 px-4 max-h-96 overflow-y-scroll flex flex-col bg-gray-50 border"
      >
        <label htmlFor="sender">Your name</label>
        <input
          className="M-input p-1"
          type="text"
          onChange={onChange}
          value={contact_name}
          name="contact_name"
          id="sender"
          required
        />
        <label htmlFor="sender-email">E-mail</label>
        <input
          className="M-input p-1"
          type="email"
          onChange={onChange}
          value={contact_email}
          name="contact_email"
          id="sender-email"
          required
        />
        <h5 className="text-red-600 text-xs">
          {errors && errors.contact_email}
        </h5>
        <label htmlFor="subject">Subject</label>
        <input
          className="M-input p-1"
          type="text"
          onChange={onChange}
          value={contact_subject}
          name="contact_subject"
          id="subject"
          required
        />
        <h5 className="text-red-600 text-xs">
          {errors && errors.contact_subject}
        </h5>
        <label htmlFor="message">Message</label>
        <textarea
          className="M-input"
          rows="10"
          onChange={onChange}
          value={contact_message}
          name="contact_message"
          id="message"
          minLength="20"
          required
        />
        <h5 className="text-red-600 text-xs">
          {errors && errors.contact_message}
        </h5>

        <button className="bg-green-900 text-white w-full my-4 rounded p-2 tracking-widest">
          SEND
        </button>
      </form>
      <div className="text-center text-xs p-3 bg-gray-100">
        Powered by <i className="far fa-comment-alt text-xs text-yellow-800" />{" "}
        <b>BENG</b>
      </div>
    </div>
  );
};

export default Form;
