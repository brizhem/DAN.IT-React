import types from "./types";
import getItems from "../api/items";

export const fetchSuccess = (value) => ({
  type: types.SET_PRODUCTS,
  payload: value,
});

export const fetchRegecting = () => ({
  type: types.SET_PRODUCTS,
  payload: [],
});

export const fetchProducts = () => (dispatch) => {
  getItems()
    .then((response) => response.json())
    .then((products) => {
      dispatch(fetchSuccess(products));
    })
    .catch((error) => {
      dispatch(fetchRegecting());
    });
};
