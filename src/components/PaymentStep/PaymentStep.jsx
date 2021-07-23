import React, {useContext} from 'react';
import {Grid} from "@material-ui/core";
import {CartContext} from "../../providers/CartProvider/CartProvider";
import {CheckoutContext} from "../../providers/CheckoutProvider/CheckoutProvider";

function PaymentStep() {
    const cartContext = useContext(CartContext);
    const checkoutContext = useContext(CheckoutContext);
    return (
        <Grid container direction={"column"}>

        </Grid>
    );
}

export default PaymentStep;