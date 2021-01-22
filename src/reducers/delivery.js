import {
  CREATE_DELIVERY,
  FETCH_ALL_DELIVERY,
  DELETE_DELIVERY,
} from "../actions/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (deliveries = [], action) => {
  switch (action.type) {
    case CREATE_DELIVERY:
      return [...deliveries, action.payload];
    case FETCH_ALL_DELIVERY:
      return action.payload;
    case DELETE_DELIVERY:
      return deliveries.filter((delivery) => delivery._id !== action.payload);
    default:
      return deliveries;
  }
};
