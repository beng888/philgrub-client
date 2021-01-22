import { setAlert } from "../actions/alert";

import API from "../utils/API";
import {
  REGISTER_USER,
  UPDATE_USER,
  LOGIN_USER,
  LOGOUT_USER,
  SET_ERRORS,
  CHECK_USER_FAIL,
  ADD_TO_CART,
  UPDATE_CART,
  SET_GUEST_CART,
  CLEAR_CART,
  CLEAR_GUEST_CART,
  CHECK_OUT,
  SET_GUEST_CHECKOUT,
  SET_BILLING_ADDRESS,
  SET_GUEST_BILLING_ADDRESS,
  SET_SHIPPING_ADDRESS,
  SET_GUEST_SHIPPING_ADDRESS,
} from "./actionTypes";

const config = { headers: { "Content-Type": "application/json" } };

export const setError = (userData) => async (dispatch) => {
  dispatch({ type: SET_ERRORS, payload: userData });
};

//=================================//
//************** USER *************//
//=================================//

export const registerUser = (userData) => async (dispatch) => {
  try {
    const res = await API.post("/auth/register", userData, config);

    dispatch({ type: REGISTER_USER, payload: res.data.user });
    dispatch(setAlert("you are logged in"));
    console.log(res);
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data.errors });
    console.log(error);
  }
};

export const updateUser = (userData, navigate) => async (dispatch) => {
  console.log(userData);
  try {
    const res = await API.put("/auth/update", userData, config);
    dispatch({ type: UPDATE_USER, payload: res.data.user });
    dispatch({ type: SET_ERRORS, payload: null });

    navigate("/dashboard");
    dispatch(setAlert("Account details updated successfuly"));
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data.errors });
    console.log(error.response.data.errors);
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    const res = await API.post("/auth/login", userData, config);

    dispatch({ type: LOGIN_USER, payload: res.data.user });
    dispatch(setAlert("you are logged in"));
    console.log(res);
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data.errors });
    console.log(error.response.data.errors);
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    await API.get("/auth/logout");
    dispatch({ type: LOGOUT_USER });
  } catch (error) {
    console.log(error.response);
  }
};

export const checkUserAction = (message) => async (dispatch) => {
  try {
    const res = await API.get("/auth/checkuser");
    dispatch({ type: REGISTER_USER, payload: res.data.user });
    console.log(res);
    console.log("you are logged in");
    dispatch(setAlert(message ? message : `Welcome ${res.data.user.username}`));
  } catch (error) {
    dispatch({ type: CHECK_USER_FAIL });
    console.log("you are not logged in");
  }
};

//=================================//
//************ ADDRESSES **********//
//=================================//

export const setBillingAddress = (userInfo) => async (dispatch) => {
  console.log(userInfo);

  try {
    const res = await API.post("/auth/billingAddress", userInfo);
    dispatch({ type: SET_BILLING_ADDRESS, payload: userInfo });
    dispatch(setAlert("billing address successfuly updated"));

    console.log(res);
  } catch (error) {
    dispatch({ type: SET_GUEST_BILLING_ADDRESS, payload: userInfo });
    dispatch({ type: SET_ERRORS, payload: error.response.data.errors });
    localStorage.setItem("guest_billingAddress", JSON.stringify(userInfo));
    console.log(error.response.data.errors);
  }
};

export const setShippingAddress = (userInfo) => async (dispatch) => {
  console.log(userInfo);

  try {
    const res = await API.post("/auth/shippingAddress", userInfo);
    dispatch({ type: SET_SHIPPING_ADDRESS, payload: userInfo });
    dispatch(setAlert("shipping address successfuly updated"));

    console.log(res);
  } catch (error) {
    dispatch({ type: SET_GUEST_SHIPPING_ADDRESS, payload: userInfo });
    dispatch({ type: SET_ERRORS, payload: error.response.data.errors });
    localStorage.setItem("guest_shippingAddress", JSON.stringify(userInfo));
    console.log(error.response.data.errors);
  }
};

//=================================//
//************** CART *************//
//=================================//

export const addToCart = (cart) => async (dispatch) => {
  try {
    const res = await API.post("/auth/addToCart", cart);
    dispatch({ type: ADD_TO_CART, payload: cart });
    dispatch(checkUserAction("Item Added to Cart"));
    console.log(res.data);
  } catch (error) {
    console.log(error);
    localStorage.setItem("guest_cart", JSON.stringify(cart));
    dispatch({ type: SET_GUEST_CART, payload: cart });
  }
};

export const updateCart = (cart) => async (dispatch) => {
  try {
    const res = await API.post("/auth/updateCart", cart);
    dispatch({ type: UPDATE_CART, payload: cart });
    dispatch(checkUserAction("Cart Updated"));
    console.log(res.data);
  } catch (error) {
    console.log(error);
    localStorage.setItem("guest_cart", JSON.stringify(cart));
    dispatch({ type: SET_GUEST_CART, payload: cart });
  }
};

export const clearCart = () => async (dispatch) => {
  try {
    const res = await API.post("/auth/clearCart");
    dispatch({ type: CLEAR_CART });
    console.log(res.data);
  } catch (error) {
    console.log(error);
    localStorage.removeItem("guest_cart");
    dispatch({ type: CLEAR_GUEST_CART });
  }
};

//=================================//
//************ CHECKOUT ***********//
//=================================//

export const proceedToCheckout = (checkout) => async (dispatch) => {
  try {
    const res = await API.post("/auth/checkout", checkout);
    dispatch({ type: CHECK_OUT, payload: checkout });
    console.log(res.data);
  } catch (error) {
    console.log(error);
    dispatch({ type: SET_GUEST_CHECKOUT, payload: checkout });
    localStorage.setItem("guest_checkout", JSON.stringify(checkout));
  }
};
