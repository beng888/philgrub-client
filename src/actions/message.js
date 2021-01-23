import { setAlert } from "../actions/alert";
import API from "../utils/API";

import {
  CREATE_MESSAGE,
  DELETE_MESSAGE,
  FETCH_ALL_MESSAGE,
  SET_ERRORS,
} from "./actionTypes";

export const getMessage = () => async (dispatch) => {
  try {
    const { data } = await API.get("/messages");
    console.log(data);

    dispatch({ type: FETCH_ALL_MESSAGE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createMessage = (messageData, setMessageData) => async (
  dispatch
) => {
  try {
    const { data } = await API.post("/messages", messageData);

    dispatch({ type: CREATE_MESSAGE, payload: data });
    dispatch(setAlert("message sent", "success", 7000));
    dispatch({ type: SET_ERRORS, payload: null });
    setMessageData({
      contact_name: "",
      contact_email: "",
      contact_phone: "",
      contact_subject: "",
      contact_message: "",
    });
    console.log(data);
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data.errors });

    console.log(error);
  }
};

export const deleteMessage = (id) => async (dispatch) => {
  try {
    const { data } = await API.delete(`/messages/${id}`);
    console.log(data);
    dispatch({ type: DELETE_MESSAGE, payload: id });
    dispatch(setAlert("message deleted"));
  } catch (error) {
    console.log(error);
  }
};
