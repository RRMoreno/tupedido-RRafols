import React, {useContext, useState} from 'react';
import {useParams} from "react-router-dom";
import {getFirestore} from "../../firebase";
import Product from "../../models/product";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import './ProductDetails.scss';
import {Rating} from "@material-ui/lab";
import {Counter} from "../Counter/Counter";
import {CartContext} from "../CartProvider/CartProvider";
import Button from "@material-ui/core/Button";

function ProductDetails() {

    const [product, setProduct] = useState(undefined);
    const [initialAmount, setInitialAmount] = useState(undefined);
    const {id} = useParams();
    const context = useContext(CartContext);
    React.useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("products");
        itemCollection.where('id', "==", Number(id)).limit(1).get().then(querySnapshot => {
            if (querySnapshot.empty) {
                setProduct(undefined);
                setInitialAmount(0);
            } else {
                setProduct(new Product(querySnapshot.docs[0].data()));
                const cartItem = context.cartItems.find(x => x.item.id === querySnapshot.docs[0].data().id);
                setInitialAmount(cartItem ? cartItem.quantity : 0);
            }
        })
    }, [id, context.cartItems]);

    function inStock() {
        if (product.qty > 0) {
            return <span>In Stock</span>
        }
        return <span>Unavailable</span>
    }

    const handleChange = (value) => {
        context.setQuantity(product, value);
    };

    const increaseQuantity = () => {
        context.addItem(product);
    }

    const decreaseQuantity = () => {
        context.decreaseItem(product);
    }

    return (
        <div className="container">
            <Grid direction="column" className="details">
                {product && <Grid direction="column" className="details-container">
                    <Typography variant="h4" color="textSecondary" className='name'>{product.name}</Typography>
                    <div className="info">
                        <img src={product.image}/>
                        <div className="text-info">
                            <Rating name="rating" readOnly size="large" value={product.rating}/>
                            <Typography variant="body2" color="textSecondary"
                                        className="description">{product.description}</Typography>
                            <div>
                                <Typography variant="body2" color="textSecondary"
                                            className="address">
                                    &euro;{product.price}
                                </Typography>
                                <Typography variant="body1" color="textSecondary"
                                            className="in-stock">{inStock()}</Typography>
                                {initialAmount != null && <Counter stock={product.qty} amount={initialAmount} onChange={handleChange} onIncrease={increaseQuantity} onDecrease={decreaseQuantity}/>
                                }
                                <Button variant="contained" color="primary">
                                   Buy now
                                </Button>
                            </div>

                        </div>
                    </div>
                </Grid>}
            </Grid>
        </div>
    );
}

export default ProductDetails;