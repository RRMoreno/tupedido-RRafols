import React, {useContext, useState} from 'react';
import {getFirestore} from "../../firebase";
import {useParams} from "react-router-dom";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {CartContext} from "../../providers/CartProvider/CartProvider";
import ProductCard from "../ProductCard/ProductCard";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    address: {
        padding: "2rem",
        border: "1px solid #ccc",
        boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);",
        margin: "0 0 1rem 0"
    }
}));
function Order() {
    const classes = useStyles();
    const {id} = useParams();
    const [order, setOrder] = useState(undefined);
    const cartContext = useContext(CartContext);
    cartContext.setShowCart(false);
    React.useEffect(() => {
        const db = getFirestore();
        const queryRef = db.collection("orders").doc(id);
        queryRef.get().then(doc=>{
            if (doc.exists) {
                const data = doc.data();
                setOrder(data);
            } else {
                setOrder(undefined);
            }
        });
    }, [id]);

    return (
        <>
            {!order && <span>That order id seems invalid</span>}
            {order && <Grid container direction={"column"}>
                <Typography variant={"h2"}>Order Details</Typography>
                <Grid item direction={"row"}>
                    <strong>Ordered on</strong> &nbsp;{order.date.toDate().toDateString()} | &nbsp; <strong>Order #</strong>&nbsp; {id}
                    &nbsp;|&nbsp;<strong>Order Total:</strong>&nbsp;&euro;{order.total}
                </Grid>
                <Grid direction={"row"} container className={classes.address}>
                    <Grid item direction={"column"}>
                        <Typography variant={"h5"}>Delivery Address</Typography>
                        <span>{order.name} {order.lastname}</span>
                        <span>{order.address.street} {order.address.house}</span>
                        <span>{order.address.city}, {order.address.zipCode}</span>
                        <span>{order.address.country}</span>
                    </Grid>
                </Grid>
                <Grid container direction="row">
                    {order.items.map((orderItem, index) => {
                        return <ProductCard key={index} product={orderItem.item} readonly={true}/>
                    })}
                </Grid>
            </Grid> }
        </>
    );
}

export default Order;