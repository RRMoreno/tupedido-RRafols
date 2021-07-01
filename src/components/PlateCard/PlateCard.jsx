import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CartWidget from "../CartWidget/CartWidget";
import {Favorite} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function PlateCard(props) {
    const classes = useStyles();
    const {plate} = props;
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
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
                <Button size="small" color="primary">
                    <CartWidget/>
                </Button>
                <IconButton aria-label="add to favorites">
                    <Favorite/>
                </IconButton>
            </CardActions>
        </Card>
    );
}
