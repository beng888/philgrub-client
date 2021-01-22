import { SET_CURRENT_ID } from "../actions/actionTypes";

const INITIAL_STATE = {
  currentId: null,
};

const variables = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_ID:
      return {
        ...state,
        currentId: payload,
      };
    default:
      return state;
  }
};

export default variables;
