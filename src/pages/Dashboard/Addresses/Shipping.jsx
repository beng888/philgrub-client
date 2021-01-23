import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import { cityOptions } from "../../../static";
import { setShippingAddress } from "../../../actions/auth";

const Shipping = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { guest } = useSelector((state) => state.guest);
  const { user } = useSelector((state) => state.auth);
  const guest_shippingAddress = JSON.parse(
    localStorage.getItem("guest_shippingAddress")
  );

  const shippingAddress = user?.username
    ? user.shippingAddress
    : guest_shippingAddress
    ? guest_shippingAddress
    : guest.guest_shippingAddress;

  const [userInfo, setUserInfo] = useState({
    shipping_firstName: shippingAddress?.shipping_firstName ?? "",
    shipping_lastName: shippingAddress?.shipping_lastName ?? "",
    shipping_companyName: shippingAddress?.shipping_companyName ?? "",
    shipping_houseAddress: shippingAddress?.shipping_houseAddress ?? "",
    shipping_apartmentAddress: shippingAddress?.shipping_apartmentAddress ?? "",
    shipping_postalCode: shippingAddress?.shipping_postalCode ?? "",
    shipping_townCity: shippingAddress?.shipping_apartmentAddress ?? "Manila",
  });

  const onChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setShippingAddress(userInfo, navigate));
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className="flex flex-col w-full "
    >
      <h3 className="text-primary font-bold mb-4">Shipping address</h3>
      <div className="flex flex-col gap-x-8 lg:gap-x-16 sm:flex-row">
        <FormField
          value={userInfo.shipping_firstName}
          onChange={onChange}
          type={"text"}
          name={"shipping_firstName"}
          label={"First name"}
          required
        />
        <FormField
          value={userInfo.shipping_lastName}
          onChange={onChange}
          type={"text"}
          name={"shipping_lastName"}
          label={"Last name"}
          required
        />
      </div>
      <FormField
        value={userInfo.shipping_companyName}
        onChange={onChange}
        type={"text"}
        name={"shipping_companyName"}
        label={"Company name (optional)"}
      />
      <FormField
        value={userInfo.shipping_houseAddress}
        onChange={onChange}
        type={"text"}
        name={"shipping_houseAddress"}
        label={"House address"}
        placeholder={"House number and street name"}
        minLength="20"
        required
      />{" "}
      <FormField
        value={userInfo.shipping_apartmentAddress}
        onChange={onChange}
        type={"text"}
        name={"shipping_apartmentAddress"}
        label={"Apartment address"}
        placeholder={"Apartment, suite, unit, etc. (optional)"}
      />
      <FormField
        value={userInfo.shipping_townCity}
        onChange={onChange}
        type={"select"}
        options={cityOptions}
        name={"shipping_townCity"}
        label={"Town / City"}
        required
      />
      <FormField
        value={userInfo.shipping_postalCode}
        onChange={onChange}
        type={"number"}
        name={"shipping_postalCode"}
        label={"Postal code"}
        pattern="[0-9]{4}"
        maxLength="4"
        title="4 digit code"
        required
      />
      <Button btn="btn-primary">SAVE ADDRESS</Button>
    </form>
  );
};

export default Shipping;
