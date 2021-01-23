import { setAlert } from "../actions/alert";
import API from "../utils/API";

import {
  CREATE_DELIVERY,
  DELETE_DELIVERY,
  FETCH_ALL_DELIVERY,
  SET_ERRORS,
} from "./actionTypes";

export const getDelivery = () => async (dispatch) => {
  try {
    const { data } = await API.get("/deliveries");
    console.log(data);

    dispatch({ type: FETCH_ALL_DELIVERY, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createDelivery = (deliveryData) => async (dispatch) => {
  try {
    const { data } = await API.post("/deliveries", deliveryData);

    dispatch({ type: CREATE_DELIVERY, payload: data });
    dispatch(setAlert("delivery location added", "success", 7000));
    dispatch({ type: SET_ERRORS, payload: null });

    console.log(data);
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data.errors });

    console.log(error);
  }
};

export const deleteDelivery = (id) => async (dispatch) => {
  try {
    const { data } = await API.delete(`/deliveries/${id}`);
    console.log(data);
    dispatch({ type: DELETE_DELIVERY, payload: id });
    dispatch(setAlert("delivery location deleted"));
  } catch (error) {
    console.log(error);
  }
};
