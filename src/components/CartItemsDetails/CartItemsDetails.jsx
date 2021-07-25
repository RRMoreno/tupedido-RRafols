import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';

import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import {CartContext} from "../../providers/CartProvider/CartProvider";

const useStyles = makeStyles((theme) => ({
    title: {
        margin: theme.spacing(4, 0, 2),
    },
    avatarImg: {
        height: 40,
        width: 40,
    }
}));

export const calcTotal = (cartItems) => {
    let total = 0;
    for (const x of cartItems) {
        total += x.item.price * x.quantity;
    }
    return Math.round((total + Number.EPSILON) * 100) / 100;
}

export default function CartItemsDetails() {
    const classes = useStyles();
    const {cartItems, removeItem, showCart} = useContext(CartContext);

    return (
        showCart ? <div className={classes.shopping}>
            <Typography variant="h6" className={classes.title}>
                Shopping Cart
            </Typography>
            <div>
                {(!cartItems || cartItems.length === 0) && <span>No Items</span>}
                <List>
                    {cartItems && cartItems.map((cartItem, index) => {
                        return (<ListItem key={index} dense>

                            <ListItemAvatar>
                                <Avatar>
                                    <img alt={cartItem.item.image} className={classes.avatarImg}
                                         src={cartItem.item.image}/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={cartItem.item.name}
                                secondary={cartItem.quantity}
                            />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete"
                                            onClick={() => removeItem(cartItem.item)}>
                                    <DeleteIcon/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>);
                    })}
                </List>
                <Typography>
                    Total Price: {calcTotal(cartItems)}
                </Typography>
                <Link to={'/checkout/'}>
                    <Button variant="contained" color="primary">
                        Check out
                    </Button>
                </Link>
            </div>
        </div> : <div/>
    );
}