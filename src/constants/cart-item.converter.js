import Product from "../models/product";

export const cartItemConverter = {
    toFirestore: function (cartItem) {
        return {
            address: cartItem.address,
            date: cartItem.date,
            email: cartItem.email,
            items: cartItem.items.map(x => {
                return {
                    item: {
                        description: x.item.description,
                        id: x.item.id,
                        image: x.item.image,
                        name: x.item.name,
                        price: x.item.price,
                        qty: x.item.qty,
                        rating: x.item.rating
                    },
                    quantity: x.quantity,
                }
            }),
            lastname: cartItem.lastname,
            name: cartItem.name,
            phone: cartItem.phone,
            total: cartItem.total
        }
    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {quantity: data.quantity, item: new Product(data.item)};
    }
}