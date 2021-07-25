import React, {useContext, useEffect, useState} from 'react';
import {Grid, LinearProgress} from "@material-ui/core";
import {CartContext} from "../../providers/CartProvider/CartProvider";
import {CheckoutContext} from "../../providers/CheckoutProvider/CheckoutProvider";
import firebase from "firebase";
import {useAuth0} from "@auth0/auth0-react";
import Typography from "@material-ui/core/Typography";
import {cartItemConverter} from "../../constants/cart-item.converter";
import {useHistory} from "react-router-dom";
import {calcTotal} from "../CartItemsDetails/CartItemsDetails";

function PaymentStep() {
    const [loading, setLoading] = useState(true);
    const [orderId, setOrderId] = useState(undefined);
    const {cartItems, emptyCart} = useContext(CartContext);
    const checkoutContext = useContext(CheckoutContext);
    const {user} = useAuth0();
    const db = firebase.firestore();
    const history = useHistory();
    console.log(cartItems)
    useEffect(() => {
        db.collection("orders").withConverter(cartItemConverter).add({
            items: cartItems,
            email: user.email,
            address: checkoutContext.address,
            date: checkoutContext.date,
            name: checkoutContext.name,
            lastname: checkoutContext.lastname,
            phone: checkoutContext.phone,
            total: calcTotal(cartItems)
        }).then(order => {
            setTimeout(() => {
                setLoading(false);
                setOrderId(order.id);
                emptyCart();
                history.push(`/orders/${order.id}`);
            }, 2000)
        });
    }, []);
    return (
        <Grid container direction={"column"}>
            {loading && <div>
                <Typography variant={"caption"}>Please wait while we create your order...</Typography>
                <LinearProgress/>
            </div>}
            {
                !loading && <div>
                    <Typography color={"textSecondary"} variant={"caption"}>Your order: {orderId} was created
                        successfully</Typography>
                </div>
            }
        </Grid>
    );
}

export default PaymentStep;