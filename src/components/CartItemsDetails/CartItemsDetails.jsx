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
import {CartContext} from "../../context/cartContext";

const useStyles = makeStyles((theme) => ({
    title: {
        margin: theme.spacing(4, 0, 2),
    },
    shopping: {
        width: '30rem'
    },
    avatarImg: {
        height: 40,
        width: 40,
    }
}));

export default function CartItemsDetails() {
    const classes = useStyles();
    const {cartItems, removeItem} = useContext(CartContext);

    return (
        <div className={classes.shopping}>
            <Typography variant="h6" className={classes.title}>
                Shopping Cart
            </Typography>
            <div>
                <List>
                    {cartItems && cartItems.map((cartItem, index) => {
                        return (<ListItem key={index} dense>
                            <ListItemAvatar>
                                <Avatar>
                                    <img className={classes.avatarImg} src={cartItem.item.image}/>
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
            </div>
        </div>
    );
}