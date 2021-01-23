import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkUserAction } from "../actions/auth";
import { getMenu } from "../actions/menu";
import { getMessage } from "../actions/message";
import { getDelivery } from "../actions/delivery";

const CheckUser = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!user.checkUser) dispatch(checkUserAction());
    console.log("checking user");

    dispatch(getMenu());
    dispatch(getDelivery());
  }, []);

  useEffect(() => {
    if (user.role === "admin") {
      dispatch(getMessage());
    }
  }, [user.role]);
  return <div />;
};

export default CheckUser;
