import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Button from "../../../components/Button";

import UserOrders from "./UserOrders";
import AdminOrders from "./AdminOrders";
const Orders = () => {
  const location = useLocation();
  const path = location.pathname;

  const { user } = useSelector((state) => state.auth);

  const userOrders =
    path === "/dashboard/orders" && user.role === "user"
      ? user.orders
      : user.role === "user"
      ? user.orders.filter((current) => current.checkoutWeekly !== false)
      : null;

  const adminOrders =
    path === "/dashboard/orders" && user.role === "admin"
      ? user.orders
      : user.role === "admin"
      ? user.orders.filter((current) => current.order.checkoutWeekly !== false)
      : null;

  const orders = user.role === "user" ? userOrders : adminOrders;

  console.log(orders);

  return (
    <>
      {orders.length === 0 ? (
        <div className="success">
          <div>
            <i className="fas fa-exclamation-circle" />{" "}
            <span>
              &nbsp;
              {path === "/dashboard/subscriptions"
                ? "No order has been made yet."
                : "You have no active subscriptions."}
            </span>
          </div>
          {orders === userOrders && (
            <Link to="/categories/our-solutions">
              <Button btn="btn-secondary-sm">Browse products</Button>
            </Link>
          )}
        </div>
      ) : (
        <div className="w-full relative">
          {user.role === "admin" ? (
            <div className="flex flex-col gap-4">
              {orders.map((o, i) => (
                <AdminOrders key={i} o={o} path={path} />
              ))}
            </div>
          ) : (
            <div className="w-full flex flex-col gap-4 self-start">
              {userOrders.map((o, i) => (
                <UserOrders key={i} order={o} path={path} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Orders;
