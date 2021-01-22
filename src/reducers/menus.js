import {
  CREATE_MENU,
  UPDATE_MENU,
  DELETE_MENU,
  FETCH_ALL_MENU,
} from "../actions/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (menus = [], action) => {
  switch (action.type) {
    case DELETE_MENU:
      return menus.filter((menu) => menu._id !== action.payload);
    case UPDATE_MENU:
      return menus.map((menu) =>
        menu._id === action.payload._id ? action.payload : menu
      );
    case FETCH_ALL_MENU:
      return action.payload;
    case CREATE_MENU:
      return [...menus, action.payload];
    default:
      return menus;
  }
};
