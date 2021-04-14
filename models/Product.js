export default class Product {
  constructor(
    id,
    name,
    price,
    imageURL,
    sizes = [],
    colors = [],
    description,
    quantity,
    ref
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imageURL = imageURL;
    this.sizes = sizes;
    this.colors = colors;
    this.description = description;
    this.quantity = quantity;
    this.ref = ref;
  }
}
