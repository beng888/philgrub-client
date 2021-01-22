import React from "react";

const UserOrders = ({ order, path }) => {
  return (
    <div tabIndex="0" className="group tab relative">
      <div className="flex justify-between items-center accordion-tab">
        <div className="center-content flex-col lg:flex-row gap-2">
          <h6>
            {order.checkoutCart.length}{" "}
            {order.checkoutCart.length > 1 ? "items" : "item"} x{" "}
            {order.checkoutQuantity}{" "}
          </h6>
          <h6>
            {" "}
            @
            {order.checkoutTotal
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            .00 ₱{" "}
          </h6>
        </div>

        <div className="text-sm">
          <h6>{order.time.split(",")[0]}</h6>
          <h6>{order.time.split(",")[1]}</h6>{" "}
        </div>
      </div>
      <div className="scale-from-top">
        {order.checkoutCart.map((item) => (
          <div
            key={item._id}
            className="p-4 flex flex-col gap-4 sm:flex-row bg-gray-100 bg-opacity-70 border-b border-gray-300"
          >
            <div className="md:w-1/3">
              <img
                src={
                  item.image.image_path
                    ? item.image.image_path
                    : "https://demofree.sirv.com/nope-not-here.jpg"
                }
                alt={item.image.originalname}
                className="w-full portrait:w-40 mx-auto"
              />
            </div>
            <div className="tracking-wider flex flex-1 flex-col justify-around">
              <div className="flex justify-between">
                <p>
                  <b className="capitalize">{item.title}&nbsp;</b>
                  <i className="text-sm"> ({item.category})</i>
                </p>
                <div>
                  <p>
                    {path === "/dashboard/orders"
                      ? item.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      : (item.price * 0.92)
                          .toFixed(2)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    {path === "/dashboard/orders" && ".00"}₱
                  </p>
                  {path === "/dashboard/subscriptions" && (
                    <p className="text-xs line-through">
                      {item.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      .00 ₱
                    </p>
                  )}
                </div>
              </div>
              <p className="flex justify-between items-center">
                <span>{item.quantity} order/s</span>
                <span>{item.servings} </span>
              </p>
              <div className="flex">
                {item.captions.map((c) => (
                  <div
                    key={c.id}
                    title={c.name}
                    className="flex max-w-14-rem gap-2 items-center  text-secondary"
                  >
                    <div
                      className={`px-1 mx-1  center-content cursor-pointer hover:opacity-50 border-2 rounded-full relative`}
                    >
                      <i className={`fas ${c.logo} text-2xl`} />
                      <p className="font-semibold text-white text-shadow-black-solid absolute">
                        {c.amount}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserOrders;
