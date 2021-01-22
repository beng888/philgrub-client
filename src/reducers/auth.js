import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  CHECK_USER_FAIL,
  ADD_TO_CART,
  UPDATE_CART,
  CLEAR_CART,
  CHECK_OUT,
  SET_BILLING_ADDRESS,
  SET_SHIPPING_ADDRESS,
  UPDATE_USER,
} from "../actions/actionTypes";

const INITIAL_STATE = {
  user: {
    role: null,
    email: "",
    cart: [],
    orders: [],
    checkout: {},
    billingAddress: {},
    shippingAddress: {},
    _id: "",
  },
  checkUser: true,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_USER:
      return { ...state, user: payload, checkUser: false };
    case UPDATE_USER:
      return { ...state, user: payload, checkUser: false };
    case LOGIN_USER:
      return { ...state, user: payload, checkUser: false };
    case CHECK_USER_FAIL:
      return { ...state, checkUser: false };
    case LOGOUT_USER:
      return INITIAL_STATE;
    case ADD_TO_CART:
      return {
        ...state,
        user: {
          ...state.user,
          cart: payload,
        },
      };
    case UPDATE_CART:
      return {
        ...state,
        user: {
          ...state.user,
          cart: payload,
        },
      };
    case CLEAR_CART:
      return {
        ...state,
        user: {
          ...state.user,
          checkout: {},
          cart: [],
        },
      };
    case CHECK_OUT:
      return {
        ...state,
        user: {
          ...state.user,
          checkout: payload,
        },
      };
    case SET_BILLING_ADDRESS:
      return {
        ...state,
        user: {
          ...state.user,
          billingAddress: payload,
        },
      };

    case SET_SHIPPING_ADDRESS:
      return {
        ...state,
        user: {
          ...state.user,
          shippingAddress: payload,
        },
      };
    default:
      return state;
  }
};
