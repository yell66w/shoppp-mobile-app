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
