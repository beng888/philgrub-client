import React from "react";

const Address = ({ A, type }) => {
  return (
    <div tabIndex="0" className="tab group">
      <div className="accordion-tab flex justify-between">
        <h6>{type === "billing" ? "Billing Address" : "Shipping Address"} </h6>{" "}
        <h6>{type === "billing" ? A.billing_townCity : A.shipping_townCity}</h6>
      </div>
      <div className="flex flex-col gap-4 p-2 bg-gray-100 bg-opacity-70 scale-from-top">
        <h6>
          Name:{" "}
          {type === "billing" ? A.billing_firstName : A.shipping_firstName}
          &nbsp; {type === "billing" ? A.billing_lastName : A.shipping_lastName}
        </h6>
        {type === "billing" && (
          <div className="grid lg:grid-cols-2">
            <h6>Contact: {A.billing_phone}</h6>
            <h6> {A.billing_email}</h6>
          </div>
        )}

        <div className="grid lg:grid-cols-2">
          <h6>
            Postal Code:{" "}
            {type === "billing" ? A.billing_postalCode : A.shipping_postalCode}
          </h6>
          {A.billing_companyName && <h6>Company: {A.billing_companyName}</h6>}
          {A.shipping_companyName && <h6>Company: {A.shipping_companyName}</h6>}
        </div>

        <h6>
          {type === "billing"
            ? A.billing_houseAddress
            : A.shipping_houseAddress}
        </h6>
        {A.billing_apartmentAddress && <h6>{A.billing_apartmentAddress}</h6>}
        {A.shipping_apartmentAddress && <h6>{A.shipping_apartmentAddress}</h6>}
      </div>
    </div>
  );
};

export default Address;
