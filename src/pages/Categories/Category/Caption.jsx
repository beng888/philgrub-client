import React, { useEffect, useRef, useState } from "react";
import { menuCaptions } from "../../../static";

const Caption = ({ open }) => {
  const [openCaption, setOpenCaption] = useState(false);

  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    setOpenCaption(!openCaption);
    console.log("Effect was run");
  }, [open]);

  return (
    <div className="w-full transform -translate-y-full absolute pointer-events-none  flex flex-col-reverse lg:flex-row items-center -z-10">
      <div
        onClick={() => setOpenCaption(!openCaption)}
        className="z-10 pointer-events-auto bg-fourth w-full lg:w-fit lg:absolute h-full center-content trans-out hover:text-gray-100 cursor-pointer px-6  hidden"
      >
        <h5 className="lg:absolute transform lg:rotate-270 lg:block ">
          CAPTIONS
        </h5>
      </div>
      <div
        className={`relative bg-fourth pointer-events-auto center-content flex-col-reverse lg:flex-row h-full transform trans-out w-full max-h-80 overflow-y-auto  ${
          !openCaption
            ? "translate-y-full lg:translate-y-0 lg:-translate-x-full "
            : ""
        }`}
      >
        <div className="flex portrait:justify-center flex-wrap gap-y-1 portrait:gap-y-4 overflow-y-auto gap-x-8  lg:py-6 px-8 lg:px-32 h-full">
          {menuCaptions.map((s) => (
            <div
              key={s.id}
              className="flex max-w-14-rem gap-2 items-center  text-secondary"
            >
              <div
                className={`px-1 mx-1  center-content cursor-pointer hover:opacity-50 border-2 rounded-full relative`}
              >
                <i className={`fas ${s.logo} text-2xl`} />
                <p className="font-semibold text-white  text-shadow-black-solid absolute">
                  {s.amount}
                </p>
              </div>
              <p className="text-xs font-extrabold">{s.name}</p>
            </div>
          ))}
        </div>
        <div
          onClick={() => setOpenCaption(false)}
          className="m-4 transform lg:-translate-x-16 text-gray-50"
        >
          <i className="far fa-arrow-alt-circle-left text-4xl hidden lg:block" />
          <i className="far fa-arrow-alt-circle-down text-4xl block lg:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Caption;
