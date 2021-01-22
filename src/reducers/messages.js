import {
  CREATE_MESSAGE,
  FETCH_ALL_MESSAGE,
  DELETE_MESSAGE,
} from "../actions/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (messages = [], action) => {
  switch (action.type) {
    case CREATE_MESSAGE:
      return [...messages, action.payload];
    case FETCH_ALL_MESSAGE:
      return action.payload;
    case DELETE_MESSAGE:
      return messages.filter((message) => message._id !== action.payload);
    default:
      return messages;
  }
};
