import {
  SET_CURRENT_ID,
  SET_LOADING,
  SET_UPDATING,
} from "../actions/actionTypes";

const INITIAL_STATE = {
  currentId: null,
  loading: false,
  updating: false,
};

const variables = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_ID:
      return {
        ...state,
        currentId: payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case SET_UPDATING:
      return {
        ...state,
        updating: payload,
      };
    default:
      return state;
  }
};

export default variables;
