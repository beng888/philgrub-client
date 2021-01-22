import React, { useEffect, useState } from "react";

import { menuCaptions } from "../../../../static";

const Dropdown = ({ setData, menu }) => {
  const [open, setOpen] = useState(false);

  const [selection, setSelection] = useState([]);

  useEffect(() => {
    if (menu) {
      setData(menu.captions);
      setSelection(menu.captions);
    }
  }, [menu]);
  // console.log(open);
  // console.log(selection);

  function handleClick(s) {
    if (!selection.some((current) => current.id === s.id)) {
      setSelection([...selection, s]);
      setData([...selection, s]);
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== s.id
      );
      setSelection([...selectionAfterRemoval]);
      setData([...selectionAfterRemoval]);
    }
  }

  function isItemInSelection(s) {
    if (selection.find((current) => current.id === s.id)) {
      return true;
    }
    return false;
  }

  return (
    <div
      // onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      tabIndex="0"
      className="outline-none relative text-secondary"
    >
      <div className="flex border-b items-center w-full">
        <h6 className="opacity-50 sm:text-xl">
          {selection.length === 0 && "Select a Caption..."}
        </h6>
        <div className=" absolute inset-0" onClick={() => setOpen(!open)} />
        <div className="flex justify-center w-fit max-w-full absolute overflow-x-auto">
          {selection.map((s) => (
            <div
              key={s.id}
              onClick={() => handleClick(s)}
              className={`px-2 py-1 mx-1 center-content cursor-pointer hover:opacity-50 border-2 rounded-full`}
            >
              <i className={`fas ${s.logo} sm:text-4xl `} />
              <p className="font-semibold text-white text-xl z-10 text-shadow-black-solid absolute">
                {s.amount}
              </p>
            </div>
          ))}
        </div>{" "}
        <i
          onClick={() => setOpen(!open)}
          className={`text-3xl py-5 fas fa-arrow-circle-${
            open ? "up" : "down"
          } z-10 ml-auto bg-blue-100`}
        ></i>
      </div>
      <div
        className={`${
          open ? "block" : "hidden"
        } bg-gray-50 absolute z-10 w-full`}
      >
        {menuCaptions.map((s) => (
          <h6
            onClick={() => handleClick(s)}
            key={s.id}
            className={`flex justify-between gap-4 text-sm sm:text-xl whitespace-pre-wrap p-1 cursor-pointer my-1 hover:bg-gray-200 ${
              isItemInSelection(s) && "bg-gray-300"
            }`}
          >
            <span className="">
              <i className={`fas ${s.logo}`} /> &nbsp;
              {s.name}
            </span>{" "}
            <span>{isItemInSelection(s) ? "✅" : "🟩"}</span>
          </h6>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
