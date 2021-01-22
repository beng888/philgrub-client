import React, { useState } from "react";
import { useSelector } from "react-redux";

const FormField = ({
  value,
  onChange,
  type,
  name,
  label,
  placeholder,
  error,
  options,
  text,
  ...rest
}) => {
  const { errors } = useSelector((state) => state.errors);
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={`flex flex-col  ${
        text ? text : "text-secondary"
      } font-semibold tracking-widest w-full`}
    >
      <label htmlFor={name} className="capitalize text-sm sm:text-base">
        {label || name}{" "}
        {rest.required && (
          <b className="text-red-600" title="Required">
            *
          </b>
        )}
      </label>
      {type === "select" ? (
        <select
          className="form-field capitalize"
          name={name}
          id={name}
          value={value}
          onChange={(e) => onChange(e)}
          {...rest}
        >
          {options.map((o, i) => (
            <option key={i} value={o}>
              {o}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e)}
          type="textarea"
          name={name}
          id={name}
          rows="3"
          {...rest}
          className="form-field focus:ring-2 ring-indigo-300"
        />
      ) : type === "password" ? (
        <div className="flex items-center relative">
          <input
            value={value}
            onChange={(e) => onChange(e)}
            type={`${visible ? "text" : "password"}`}
            name={name}
            id={name}
            placeholder={placeholder}
            {...rest}
            min="0"
            className="form-field w-full"
          />
          <i
            onClick={() => setVisible(!visible)}
            className={`fas ${
              visible ? "fa-eye" : "fa-eye-slash"
            } absolute right-4`}
          />
        </div>
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e)}
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          {...rest}
          min="0"
          className="form-field"
        />
      )}
      <div className="text-red-600">
        {error !== false &&
          errors &&
          Object.entries(errors).map(([key, value]) => {
            return <span key={value}>{key === name && value}</span>;
          })}
        <br />{" "}
      </div>{" "}
    </div>
  );
};

export default FormField;
