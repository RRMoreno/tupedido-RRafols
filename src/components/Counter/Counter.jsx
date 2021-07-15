import React, {useContext} from 'react';
import {Backdrop, Fade, FormControl, InputAdornment, Modal, OutlinedInput} from "@material-ui/core";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import {Add, AddShoppingCart, Remove} from "@material-ui/icons";
import CardActions from "@material-ui/core/CardActions";
import {makeStyles} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";
import {CartContext} from "../CartProvider/CartProvider";


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
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export function Counter(props) {

    const classes = useStyles();
    const {stock, amount, onChange, onDecrease, onIncrease} = props;
    const [quantity, setQuantity] = React.useState(amount);
    const handleChange = (event) => {
        setQuantity(event.target.value);
        onChange(event.target.value);
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const increaseQuantity = () => {
        if (stock > quantity) {
            setQuantity(quantity + 1);
            onIncrease();
        } else {
            handleOpen();
        }
    }

    const decreaseQuantity = () => {
        setQuantity(quantity - 1);
        onDecrease();
    }

    return (
        <div>{
            <CardActions className={classes.priceContainer}>
                <IconButton aria-label="add to favorites" onClick={increaseQuantity}>
                    <AddShoppingCart/>

                </IconButton>
                {quantity > 0 && <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                    <OutlinedInput
                        value={quantity}
                        onChange={handleChange}
                        startAdornment={<InputAdornment position={"start"}>
                            <IconButton onClick={decreaseQuantity}><Remove/></IconButton>
                        </InputAdornment>}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={increaseQuantity}
                                >
                                    <Add/>
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>}

            </CardActions>}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">No stock available</h2>
                        <p id="transition-modal-description">Sorry, we are out of stock.</p>
                    </div>
                </Fade>
            </Modal>
        </div>

    );
}