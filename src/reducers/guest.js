import {
  SET_GUEST_CART,
  CLEAR_GUEST_CART,
  SET_GUEST_CHECKOUT,
  SET_GUEST_BILLING_ADDRESS,
  SET_GUEST_SHIPPING_ADDRESS,
} from "../actions/actionTypes";

const INITIAL_STATE = {
  guest: {
    guest_cart: [],
    guest_checkout: {},
    guest_billingAddress: {},
    guest_shippingAddress: {},
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_GUEST_CART:
      return {
        ...state,
        guest: {
          ...state.guest,
          guest_cart: payload,
        },
      };
    case CLEAR_GUEST_CART:
      return {
        ...state,
        guest: {
          ...state.guest,
          guest_cart: [],
          guest_checkout: {},
        },
      };
    case SET_GUEST_CHECKOUT:
      return {
        ...state,
        guest: {
          ...state.guest,
          guest_checkout: payload,
        },
      };
    case SET_GUEST_BILLING_ADDRESS:
      return {
        ...state,
        guest: {
          ...state.guest,
          guest_billingAddress: payload,
        },
      };
    case SET_GUEST_SHIPPING_ADDRESS:
      return {
        ...state,
        guest: {
          ...state.guest,
          guest_shippingAddress: payload,
        },
      };
    default:
      return state;
  }
};
