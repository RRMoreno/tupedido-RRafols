import React, {useContext} from 'react';
import {ShoppingCart} from "@material-ui/icons";
import {Badge} from "@material-ui/core";
import {CartContext} from "../../providers/CartProvider/CartProvider";


export default function CartWidget(props) {
    const {cartItems} = useContext(CartContext);
    const {onCartClick} = props;

    function calcTotal() {
        let sum = 0;
        for (const item of cartItems) {
            sum += item.quantity;
        }
        return sum;
    }

    return (
        <Badge badgeContent={calcTotal()} color="primary">
            <ShoppingCart onClick={onCartClick}/>
        </Badge>
    );
};
