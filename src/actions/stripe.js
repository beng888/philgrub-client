import { setAlert } from "../actions/alert";
import API from "../utils/API";
import { CLEAR_CART, CLEAR_GUEST_CART } from "./actionTypes";

export const stripePay = (
  token,
  checkoutTotal,
  description,
  checkout,
  saveCard,
  orders
) => async (dispatch) => {
  try {
    const options = { headers: { "Content-Type": "application/json" } };
    const body = { token, checkoutTotal, description, checkout, orders };
    console.log(body);
    const url = saveCard ? "stripe/savecardandcharge" : "stripe/singlecharge";
    let res = await API.post(url, body, options);
    dispatch({ type: CLEAR_CART });
    dispatch(setAlert("Payment successfuly made"));
    console.log(res);
  } catch (error) {
    localStorage.removeItem("guest_cart");
    localStorage.removeItem("guest_checkout");
    dispatch({ type: CLEAR_GUEST_CART });
    console.log(error.response);
    error.response.statusText === "Not Found" &&
      dispatch(setAlert("Payment successfuly made"));
  }
};
