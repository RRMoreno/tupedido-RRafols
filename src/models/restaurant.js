export default class Restaurant {
    id;
    name;
    address;
    plates;
    image;
    description;

    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.address = data.address;
        this.plates = data.plates;
        this.image = data.image;
        this.description = data.description;
    }
}
