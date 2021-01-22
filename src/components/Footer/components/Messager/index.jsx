import React, { useState } from "react";

import Form from "./Form";

const Messager = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      tabIndex="0"
      className="fixed bottom-2 right-2 tab bg-fourth rounded-full shadow-black group"
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <div
        onClick={() => setOpen(true)}
        className="center-content h-16 w-16 p-2"
      >
        <i className="far fa-comment gray" />
        <i className="far fa-comment-dots gray absolute opacity-0 group-hover:opacity-100" />
      </div>
      <div
        className={`absolute -bottom-1 -right-1 bg-gray-200  shadow-black rounded-t-lg trans-out origin-bottom-right cursor-default ${
          open ? "transform scale-100" : "transform scale-0"
        }  `}
      >
        <i
          onClick={() => setOpen(false)}
          className="fas fa-times-circle absolute right-2 top-2"
        ></i>
        <Form setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Messager;
