export default class CartProduct {
  constructor(id, name, price, imageURL, size, color, quantity, ref) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imageURL = imageURL;
    this.size = size;
    this.color = color;
    this.quantity = quantity;
    this.ref = ref;
  }
}
