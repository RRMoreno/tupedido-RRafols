import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import {ShoppingCart} from "@material-ui/icons";

export default function CartWidget() {
    return (
        <IconButton
            aria-label="cart"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
        >
            <ShoppingCart />
        </IconButton>
    );
};
