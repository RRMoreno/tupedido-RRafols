export default class Plate {
    id;
    name;
    category;
    price;
    image;
    qty;

    constructor(plate) {
        this.id = plate.id;
        this.category = plate.category;
        this.image = plate.image;
        this.price = plate.price;
        this.name = plate.name;
        this.qty = plate.qty;
    }

}