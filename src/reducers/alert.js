import { SET_ALERT, REMOVE_ALERT } from "../actions/actionTypes";

const INITIAL_STATE = {
  alert: [],
};

const alert = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return {
        ...state,
        alert: [...state.alert, payload],
      };
    case REMOVE_ALERT:
      return {
        ...state,
        alert: state.alert.filter((el) => el.id !== payload),
      };
    default:
      return state;
  }
};

export default alert;
