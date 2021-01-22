import React, { useEffect, useState } from "react";

import FormField from "../../../../components/FormField";
import Button from "../../../../components/Button";
import { createDelivery, deleteDelivery } from "../../../../actions/delivery";
import { useDispatch, useSelector } from "react-redux";

const Delivery = () => {
  const dispatch = useDispatch();
  const delivery = useSelector((state) => state.delivery);

  console.log(delivery);
  const [deliveryData, setDeliveryData] = useState({
    location: "",
    postal: "",
  });

  const onChange = (e) => {
    setDeliveryData({
      ...deliveryData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createDelivery(deliveryData));
  };
  useEffect(() => {
    setDeliveryData({
      location: "",
      postal: "",
    });
  }, [delivery]);

  return (
    <div className="w-full flex flex-col sm:flex-row gap-8">
      <form autoComplete="off" onSubmit={handleSubmit} className="sm:w-1/3">
        <FormField
          value={deliveryData.location}
          onChange={onChange}
          type={"text"}
          name={"location"}
          required
        />
        <FormField
          value={deliveryData.postal}
          onChange={onChange}
          type={"text"}
          name={"postal"}
          required
        />

        <Button btn="btn-primary">Add Location</Button>
      </form>
      <div className="w-full max-h-96 overflow-y-auto">
        {" "}
        {delivery.map((d) => (
          <div key={d._id} className="flex justify-between p-2 odd:bg-gray-300">
            <h6>{d.location}</h6>
            <h6>
              {d.postal}
              <i
                className="fas fa-trash-alt ml-2"
                onClick={() => {
                  dispatch(deleteDelivery(d._id));
                }}
              />
            </h6>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default Delivery;
