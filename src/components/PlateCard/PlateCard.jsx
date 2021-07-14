import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Counter} from "../Counter/Counter";
import {CartContext} from "../CartProvider/CartProvider";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },


});

export default function PlateCard(props) {
    const classes = useStyles();
    const {plate} = props;
    const context = useContext(CartContext);
    const cartItem = context.cartItems.find(x => x.item.id === plate.id);
    const amount = cartItem ? cartItem.quantity : 0;
    const handleChange = (value) => {
        context.setQuantity(plate, value);
    };

    const increaseQuantity = () => {
        context.addItem(plate);
    }

    const decreaseQuantity = () => {
        context.decreaseItem(plate);
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={plate.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {plate.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {plate.category}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        &euro;{plate.price}
                    </Typography>

                </CardContent>
            </CardActionArea>
            <CardActions>
                <Counter stock={plate.qty} amount={amount} onChange={handleChange} onIncrease={increaseQuantity} onDecrease={decreaseQuantity}/>
            </CardActions>
        </Card>
    );
}










