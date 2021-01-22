import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import { cityOptions } from "../../../static";
import { setBillingAddress } from "../../../actions/auth";
import { SET_ERRORS } from "../../../actions/actionTypes";
import { setAlert } from "../../../actions/alert";

const Billing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let location = useLocation();
  const path = location.pathname;

  const { errors } = useSelector((state) => state.errors);
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

  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    errors === null &&
      path === "/dashboard/addresses/billing" &&
      navigate("/dashboard/addresses");
    dispatch(setAlert("billing address successfuly updated"));
  }, [billingAddress]);

  const [userInfo, setUserInfo] = useState({
    billing_firstName: billingAddress?.billing_firstName,
    billing_lastName: billingAddress?.billing_lastName,
    billing_companyName: billingAddress?.billing_companyName,
    billing_houseAddress: billingAddress?.billing_houseAddress,
    billing_apartmentAddress: billingAddress?.billing_apartmentAddress,
    billing_postalCode: billingAddress?.billing_postalCode,
    billing_phone: billingAddress?.billing_phone,
    billing_email: billingAddress?.billing_email,
    billing_townCity: billingAddress
      ? billingAddress?.billing_apartmentAddress
      : "Manila",
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
    console.log(errors);

    dispatch(setBillingAddress(userInfo));
    // errors !== null && navigate("/dashboard/addresses");
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
        type={"number"}
        name={"billing_postalCode"}
        label={"Postal code"}
        required
      />
      <FormField
        value={userInfo.billing_phone}
        onChange={onChange}
        type={"number"}
        name={"billing_phone"}
        label={"phone"}
        required
      />
      <FormField
        value={userInfo.billing_email}
        onChange={onChange}
        type={"email"}
        name={"billing_email"}
        label={"Email address"}
        required
      />
      <Button btn="btn-primary">SAVE ADDRESS</Button>
    </form>
  );
};

export default Billing;
