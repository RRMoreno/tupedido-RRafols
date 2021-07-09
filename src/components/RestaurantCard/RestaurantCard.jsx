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
import {Favorite} from "@material-ui/icons";
import {Link} from "react-router-dom";

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
}));
export default function ItemCard(props) {
    const classes = useStyles();
    const {restaurant} = props;

    function resumText(texto) {
        if (texto.length > 120) {
            return <span>{texto.slice(0, 119)} <Link to={'/details/' + restaurant.id}>View more...</Link></span>
        }
    }

    return (
        <Card className={classes.root}>
            <CardHeader
                title={restaurant.name}
                subheader={restaurant.address}
            />
            <CardMedia
                className={classes.media}
                image={restaurant.image}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {resumText(restaurant.description)}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Favorite/>
                </IconButton>
            </CardActions>
        </Card>
    );
};
