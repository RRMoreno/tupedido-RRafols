import React from "react";

export const CartContext = React.createContext({
    cartItems: [],
    addItem: (item) => {},
    decreaseItem: (item) => {},
    removeItem: (item) => {},
    setQuantity: (item, amount) => {}
});
