import {
  ADD_PRODUCT,
  SET_PRODUCTS,
  SET_USER_PRODUCTS,
} from "../actions/product.action";

const INITIAL_STATE = {
  availableProducts: [],
  userProducts: [],
};
export const productsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, availableProducts: payload };
    case SET_USER_PRODUCTS:
      return { ...state, userProducts: payload };
    default:
      return state;
  }
};
