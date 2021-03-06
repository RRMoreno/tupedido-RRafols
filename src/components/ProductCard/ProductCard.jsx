import React, {useContext} from 'react';
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";
import {Counter} from "../Counter/Counter";
import {Link} from "react-router-dom";
import './ProductCard.scss';
import {CartContext} from "../../providers/CartProvider/CartProvider";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    price: {
        color: "black",
        fontSize: "large",
        fontWeight: "bolder"
    },
    priceContainer: {
        justifyContent: "space-between"
    },
    margin: {
        margin: theme.spacing(1),
    },
    textField: {
        width: '25ch',
    },


}));
export default function ProductCard(props) {
    const classes = useStyles();
    const {product, readonly} = props;
    const context = useContext(CartContext);
    const cartItem = context.cartItems.find(x => x.item.id === product.id);
    const amount = cartItem ? cartItem.quantity : 0;

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
        <Card className={classes.root}>

            <CardHeader
                title={product.name}
            />
            <Link to={'/product/' + product.id}>
                <CardMedia className={classes.media} image={product.image}/>
            </Link>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {product.description}
                </Typography>
            </CardContent>

            <span className="price">
                    	&euro;{product.price}
            </span>
            {!readonly && <Counter stock={product.qty} amount={amount} onChange={handleChange} onIncrease={increaseQuantity} onDecrease={decreaseQuantity}/>}
        </Card>
    );
};