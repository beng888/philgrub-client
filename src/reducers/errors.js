import { SET_ERRORS } from "../actions/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ERRORS:
      return { errors: payload };

    default:
      return state;
  }
};
