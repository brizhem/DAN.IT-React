import types from "./types";

const initialState = JSON.parse(localStorage.getItem("redux")) || {};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case types.SET_BASKET_PRODUCTS:
      return {
        ...state,
        basketProducts: action.payload,
      };
    case types.SET_MARKED_PRODUCTS:
      return {
        ...state,
        markedProducts: action.payload,
      };
  }
}

export default reducer;
