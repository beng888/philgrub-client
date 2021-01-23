import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMessage } from "../../../../actions/message";

const Messages = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);

  console.log(messages);
  return (
    <div className=" w-full relative">
      {messages.map((m, i) => (
        <div tabIndex="0" key={i} className="tab group">
          <div className="font-semibold bg-gray-300 p-2 border-t-4 border-purple-400">
            <div className="flex justify-between mb-2">
              <p className="w-">{m.contact_name}</p>
              <p className="hidden lg:block">{m.contact_subject}</p>
              <p>{m.createdAt.split("T")[0]}</p>
            </div>
            <p className="text-center lg:hidden">{m.contact_subject}</p>
          </div>

          <div className="flex gap-4 p-4 bg-gray-200 border-b scale-from-top ">
            <p className=" break-all whitespace-pre-wrap  w-full">
              {m.contact_message}
            </p>
            <div className=" text-right">
              <p
                onClick={() => window.open(`tel:${m.contact_phone}`)}
                className="hov-link-text"
                title="Call"
              >
                {m.contact_phone}
              </p>

              <div>
                <i
                  className="fas fa-reply"
                  onClick={() => window.open(`mailto:${m.contact_email}`)}
                  title="Reply"
                />
                <i
                  className="fas fa-trash-alt ml-4"
                  title="Delete"
                  onClick={() => {
                    dispatch(deleteMessage(m._id));
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Messages;
