export default class Product {
    id;
    name;
    image;
    description;
    price;
    qty;
    rating;

    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.image = data.image;
        this.description = data.description;
        this.price = data.price;
        this.qty = data.qty;
        this.rating = data.rating;
    }


}