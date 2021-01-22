import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MenusHome = () => {
  const menus = useSelector((state) => state.menus);
  const messages = useSelector((state) => state.messages);
  const delivery = useSelector((state) => state.delivery);

  return (
    <div className="grid w-full">
      <Link to="/dashboard/admin/create">
        <h1 className="admin-tab">Add a Menu</h1>
      </Link>
      <Link to="/dashboard/admin/manage">
        <div className="admin-tab">
          <h1>Manage Menu</h1>
          <h6>({menus.length} menu items)</h6>{" "}
        </div>
      </Link>
      <Link to="/dashboard/admin/delivery">
        <div className="admin-tab">
          <h1>Delivery Areas</h1>
          <h6> ({delivery.length} delivery areas)</h6>
        </div>
      </Link>{" "}
      <Link to="/dashboard/admin/messages">
        <div className="admin-tab">
          <h1>Messages</h1>
          <h6> (you have {messages.length} messages)</h6>{" "}
        </div>
      </Link>
    </div>
  );
};

export default MenusHome;
