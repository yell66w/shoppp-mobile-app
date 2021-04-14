import CartProduct from "../../models/Cart_Product";

const INITIAL_STATE = {
  products: [],
};

export const cartsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newItem = new CartProduct(
        action.id,
        action.name,
        action.price,
        action.imageURL,
        action.size,
        action.color,
        action.quantity,
        action.ref
      );
      const newState = { ...state, products: [...state.products, newItem] };
      return newState;
    default:
      return state;
  }
};
