import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import { cityOptions } from "../../../static";
import { setBillingAddress } from "../../../actions/auth";
import { SET_ERRORS } from "../../../actions/actionTypes";

const Billing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { guest } = useSelector((state) => state.guest);
  const { user } = useSelector((state) => state.auth);
  const guest_billingAddress = JSON.parse(
    localStorage.getItem("guest_billingAddress")
  );

  const billingAddress = user?.username
    ? user.billingAddress
    : guest_billingAddress
    ? guest_billingAddress
    : guest.guest_billingAddress;

  const [userInfo, setUserInfo] = useState({
    billing_firstName: billingAddress?.billing_firstName ?? "",
    billing_lastName: billingAddress?.billing_lastName ?? "",
    billing_companyName: billingAddress?.billing_companyName ?? "",
    billing_houseAddress: billingAddress?.billing_houseAddress ?? "",
    billing_apartmentAddress: billingAddress?.billing_apartmentAddress ?? "",
    billing_postalCode: billingAddress?.billing_postalCode ?? "",
    billing_phone: billingAddress?.billing_phone ?? "",
    billing_email: billingAddress?.billing_email ?? "",
    billing_townCity: billingAddress?.billing_apartmentAddress ?? "Manila",
  });

  const onChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: SET_ERRORS, payload: null });

    dispatch(setBillingAddress(userInfo, navigate));
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className="flex flex-col w-full "
    >
      <h3 className="text-primary font-bold mb-4">Billing address</h3>
      <div className="flex flex-col gap-x-8 lg:gap-x-16 sm:flex-row">
        <FormField
          value={userInfo.billing_firstName}
          onChange={onChange}
          type={"text"}
          name={"billing_firstName"}
          label={"First name"}
          required
        />
        <FormField
          value={userInfo.billing_lastName}
          onChange={onChange}
          type={"text"}
          name={"billing_lastName"}
          label={"Last name"}
          required
        />
      </div>
      <FormField
        value={userInfo.billing_companyName}
        onChange={onChange}
        type={"text"}
        name={"billing_companyName"}
        label={"Company name (optional)"}
      />
      <FormField
        value={userInfo.billing_houseAddress}
        onChange={onChange}
        type={"text"}
        name={"billing_houseAddress"}
        label={"House address"}
        placeholder={"House number and street name"}
        minLength="20"
        required
      />{" "}
      <FormField
        value={userInfo.billing_apartmentAddress}
        onChange={onChange}
        type={"text"}
        name={"billing_apartmentAddress"}
        label={"Apartment address"}
        placeholder={"Apartment, suite, unit, etc. (optional)"}
      />
      <FormField
        value={userInfo.billing_townCity}
        onChange={onChange}
        type={"select"}
        options={cityOptions}
        name={"billing_townCity"}
        label={"Town / City"}
        required
      />
      <FormField
        value={userInfo.billing_postalCode}
        onChange={onChange}
        type={"tel"}
        name={"billing_postalCode"}
        label={"Postal code"}
        pattern="[0-9]{4}"
        maxLength="4"
        title="4 digit code"
        required
      />
      <FormField
        value={userInfo.billing_phone}
        onChange={onChange}
        type={"tel"}
        name={"billing_phone"}
        label={"phone"}
        pattern="[0]{1}[9]{1}[0-9]{9}"
        maxLength="11"
        title="cellphone number"
        required
      />
      <span className="text-xs transform -translate-y-5 ">
        Format: <b className="text-gray-500 tracking-widest">09#########</b>
      </span>
      <FormField
        value={userInfo.billing_email}
        onChange={onChange}
        type={"email"}
        name={"billing_email"}
        label={"Email address"}
        required
      />
      <div className="text-center sm:text-left">
        <Button btn="btn-primary">SAVE ADDRESS</Button>
      </div>
    </form>
  );
};

export default Billing;
