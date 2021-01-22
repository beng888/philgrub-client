import { combineReducers } from "redux";

import auth from "./auth";
import errors from "./errors";
import menus from "./menus";
import messages from "./messages";
import delivery from "./delivery";
import alert from "./alert";
import guest from "./guest";
import variables from "./variables";

export default combineReducers({
  auth,
  errors,
  menus,
  messages,
  delivery,
  alert,
  guest,
  variables,
});
