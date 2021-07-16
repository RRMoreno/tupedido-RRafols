import React from 'react';
import BannerCarousel from "../BannerCarousel/BannerCarousel";
import {makeStyles} from '@material-ui/core/styles';
import {Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(200),
            height: theme.spacing(80),
        },

    },
    h4:{
        marginTop: theme.spacing(4),
    }
}));

function WhoWeAre() {
    const classes = useStyles();
    return (
        <div className="container">
            <BannerCarousel/>
            <div className={classes.root}>

                <Paper elevation={8}>
                    <Typography><h4 className={classes.h4}>TuPedido</h4> <p> is the online store to make your shipments at any time of the day
                        or year and from anywhere in the
                        world for the family in Cuba.</p>

                        <p>We accept payments by credit card Visa and MasterCard. We guarantee 100% security in online
                            transactions. To
                            prevent fraud and misuse of credit cards, our monitoring team analyzes the authenticity of
                            all transactions.</p>

                        <p>As a general rule, orders are delivered within 7 business days for the capital and for other
                            regions the
                            delivery time extends up to 10 business days although it is generally shorter. Deliveries
                            are made through
                            companies specialized in distribution, ensuring that the purchase made by you reaches the
                            final recipient in
                            perfect condition. For more information, you can check our delivery terms and rates
                            here.</p>

                        <p>Choose our Online Agency to place your orders. We have more than 1000 products that we put at
                            your disposal
                            to deliver them, from the comfort of your home, in a fast and safe way.</p></Typography>
                </Paper>
            </div>

        </div>
    );
}

export default WhoWeAre;