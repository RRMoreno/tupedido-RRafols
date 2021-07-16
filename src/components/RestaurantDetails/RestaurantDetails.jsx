import React, {useEffect, useState} from 'react';
import PlateList from "../PlatesList/PlateList";
import {getFirestore} from "../../firebase";
import {useParams} from "react-router-dom";
import Restaurant from "../../models/restaurant";
import Typography from "@material-ui/core/Typography";
import {Grid, Icon} from "@material-ui/core";
import {Home} from "@material-ui/icons";
import './RestaurantDetails.scss';
import Plate from "../../models/plates";


export default function RestaurantDetails() {
    const [restaurant, setRestaurant] = useState(undefined);
    const [plates, setPlates] = useState(undefined);
    const {id} = useParams();
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("restaurants");
        itemCollection.where('id', "==", Number(id)).limit(1).get().then(querySnapshot => {
            if (querySnapshot.empty) {
                setRestaurant(undefined);
            } else {
                setRestaurant(new Restaurant(querySnapshot.docs[0].data()));
            }
        })
    }, [id]);

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("plates");
        itemCollection.get().then(querySnapshot => {
            if (querySnapshot.empty) {
                setPlates([]);
            } else {
                const prods = querySnapshot.docs.map(p => {
                    return new Plate(p.data());
                });
                setPlates(prods);
            }
        })
    }, [id]);

    return (
        <div className="container">
            <Grid direction="column" className="details">
                {restaurant && <Grid direction="column" className="details-container">
                    <Typography variant="h4" color="textSecondary" className='name'>{restaurant.name}</Typography>
                    <div className="info">
                        <img src={restaurant.image}/>
                        <div className="text-info">
                            <Typography variant="body2" color="textSecondary"
                                        className="description">{restaurant.description}</Typography>
                            <div>
                                <Icon><Home/></Icon>
                                <Typography variant="body2" color="textSecondary"
                                            className="address">{restaurant.address}</Typography>
                            </div>
                        </div>
                    </div>
                </Grid>}

            </Grid>
            <PlateList plates={plates}/>
        </div>


    );
}
