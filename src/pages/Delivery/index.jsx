import React, { useState } from "react";
import { useSelector } from "react-redux";

import Validate from "./Validate";

const Delivery = () => {
  const delivery = useSelector((state) => state.delivery);
  const [notFound, setNotFound] = useState(false);

  console.log(notFound);
  return (
    <div className="grid sm:grid-cols-2 min-h-screen px-4 sm:px-8 md:px-16 xl:px-32 tracking-widest bg-second text-gray-100 ">
      <Validate setNotFound={setNotFound} delivery={delivery} />

      <div className="flex flex-col gap-8  no-scrollbar my-20  ml-auto w-full max-w-lg">
        <div className="pt-20 text-quaternary text-xl font-semibold">
          {notFound && "Sorry our delivery service does not cover your city"}
        </div>
        {delivery.map((d) => (
          <div key={d._id}>
            <span
              id={d.location}
              className="absolute  h-28 transform -translate-y-full"
            />
            <p className="p-3">{d.location}</p>
            <p className="p-3 bg-black bg-opacity-25">{d.postal}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Delivery;
