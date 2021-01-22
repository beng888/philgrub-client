import { SET_ALERT, REMOVE_ALERT } from "../actions/actionTypes";
import { v4 as uuid } from "uuid";

export const setAlert = (str, type, timeout = 4000) => (dispatch) => {
  const newID = uuid();
  dispatch({ type: SET_ALERT, payload: { id: newID, msg: str, type: type } });
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: newID }), timeout);
};
