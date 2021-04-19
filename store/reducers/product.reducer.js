import { PRODUCTS } from "../../data/dummy-data";
const INITIAL_STATE = {
  availableProducts: PRODUCTS,
  userProducts: [],
};
export const productsReducer = (state = INITIAL_STATE, action) => {
  return state;
};
