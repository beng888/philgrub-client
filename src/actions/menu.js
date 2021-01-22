import { setAlert } from "../actions/alert";
import API from "../utils/API";

import {
  CREATE_MENU,
  UPDATE_MENU,
  DELETE_MENU,
  FETCH_ALL_MENU,
  SET_ERRORS,
} from "./actionTypes";

export const getMenu = () => async (dispatch) => {
  try {
    const { data } = await API.get("/menus");
    console.log(data);

    dispatch({ type: FETCH_ALL_MENU, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createMenu = (menuData) => async (dispatch) => {
  try {
    const { data } = await API.post("/menus", menuData);

    dispatch({ type: CREATE_MENU, payload: data });
    dispatch(setAlert("item successfully created"));

    console.log(data);
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data.errors });

    console.log(error);
  }
};

export const deleteMenu = (id) => async (dispatch) => {
  try {
    const { data } = await API.delete(`menus/${id}`);
    console.log(data);
    dispatch({ type: DELETE_MENU, payload: id });
    dispatch(setAlert("item successfully deleted"));
  } catch (error) {
    console.log(error);
  }
};

export const updateMenu = (id, menu) => async (dispatch) => {
  try {
    const { data } = await API.patch(`menus/${id}`, menu);

    dispatch({ type: UPDATE_MENU, payload: data });
    dispatch(setAlert("item successfully edited"));
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data.errors });

    console.log(error);
  }
};

// export const likeMenu = (id) => axios.patch(`${url}/${id}/likeMenu`);
