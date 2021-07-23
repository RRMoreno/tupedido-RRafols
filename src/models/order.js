export class Order {
    id;
    date;
    address;
    total;
    items;

    constructor(data) {
        this.id = data.id;
        this.date = data.date;
        this.address = data.address;
        this.total = data.total;
        this.items = data.items;
    }
}