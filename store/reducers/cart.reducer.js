import CartProduct from "../../models/Cart_Product";

const INITIAL_STATE = {
  products: [],
  quantity: 0,
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
      const newState = {
        ...state,
        ...{
          products: [...state.products, newItem],
          quantity: state.quantity + 1,
        },
      };
      return newState;

    case "DELETE_FROM_CART":
      return {
        ...state,
        ...{
          products: state.products.filter((item) => item.id !== action.id),
          quantity: state.quantity - 1,
        },
      };
    case "ADD_CART_ITEM_QUANTITY":
      return {
        ...state,
        products: state.products.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "SUBTRACT_CART_ITEM_QUANTITY":
      return {
        ...state,
        products: state.products.map((item) => {
          return item.id === action.id
            ? item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
            : item;
        }),
      };
    default:
      return state;
  }
};
