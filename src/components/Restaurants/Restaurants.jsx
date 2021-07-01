import React from 'react';
import Restaurant from "../../models/restaurant";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import {getFirestore} from "../../firebase";


function Restaurants(props) {
    let [restaurants, setRestaurants] = React.useState([]);
    React.useEffect(() => {
        const db = getFirestore();
        const restaurantCollection = db.collection("restaurants");
        restaurantCollection.get().then(querySnapshot => {
            if (querySnapshot.empty) {
                setRestaurants([]);
            } else {
                const prods = querySnapshot.docs.map(prod => {
                    return new Restaurant(prod.data());
                });
                setRestaurants(prods);
            }
        })
    }, []);
    return (
        <ItemListContainer restaurants={restaurants}/>
    );
}

export default Restaurants;