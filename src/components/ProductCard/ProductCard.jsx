import React from 'react';
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";
import {Add, AddShoppingCart, Remove} from "@material-ui/icons";
import {Button, FormControl, InputAdornment, OutlinedInput} from "@material-ui/core";
import clsx from "clsx";

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
    const {product} = props;
    const [quantity, setQuantity] = React.useState(0);
    const handleChange = (event) => {
        setQuantity(event.target.value);
    };

    const increaseQuantity = () => {
        if (product.qty > quantity) {
            setQuantity(quantity + 1);
        }
    }

    const decreaseQuantity = () => {
        setQuantity(quantity - 1);
    }

    return (
        <Card className={classes.root}>
            <CardHeader
                title={product.name}
            />
            <CardMedia
                className={classes.media}
                image={product.image}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {product.description}
                </Typography>
            </CardContent>
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
                <span className="price">
                    	&euro;{product.price}
                </span>
            </CardActions>
            {quantity > 0 && <Button className={classes.margin} variant="outlined" color="primary">
                Add to cart
            </Button>}
        </Card>
    );
};