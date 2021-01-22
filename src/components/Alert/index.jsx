import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Alert = () => {
  const { alert } = useSelector((state) => state.alert);

  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, [alert]);

  console.log(alert);

  return (
    <div
      className={`fixed top-8 right-0 z-50 transform trans-linear translate-y-20 flex flex-col gap-1`}
    >
      {alert &&
        alert.map((el) => (
          <h6
            className={`${
              el.type === "error" ? "border-red-500" : "border-green-500"
            } border-t-2 text-xs bg-gray-50 py-2 px-4 capitalize flex items-center`}
            key={el.id}
          >
            <i
              className={`${
                el.type === "error"
                  ? "fas fa-times-circle text-red-500"
                  : "fas fa-check-circle text-green-500"
              } `}
            />{" "}
            &nbsp;{el.msg}
          </h6>
        ))}
    </div>
  );
};

export default Alert;
