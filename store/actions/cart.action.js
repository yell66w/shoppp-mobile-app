export const addToCart = (
  id,
  name,
  price,
  imageURL,
  size,
  color,
  quantity,
  ref
) => ({
  type: "ADD_TO_CART",
  id,
  name,
  price,
  imageURL,
  size,
  color,
  quantity,
  ref,
});

export const deleteFromCart = (id) => ({
  type: "DELETE_FROM_CART",
  id,
});
export const addCartItemQuantity = (id) => ({
  type: "ADD_CART_ITEM_QUANTITY",
  id,
});
export const subtractCartItemQuantity = (id) => ({
  type: "SUBTRACT_CART_ITEM_QUANTITY",
  id,
});
