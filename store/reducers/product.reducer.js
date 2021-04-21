import { ADD_PRODUCT, SET_PRODUCTS } from "../actions/product.action";

const INITIAL_STATE = {
  availableProducts: [],
  userProducts: [],
};
export const productsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, availableProducts: payload };
    case ADD_PRODUCT:
      return {
        ...state,
        availableProducts: [...state.availableProducts, payload],
      };
    default:
      return state;
  }
};
