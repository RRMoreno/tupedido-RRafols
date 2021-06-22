import React from 'react';
import axios from "axios";
import Restaurant from "../../models/restaurant";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

function Restaurants(props) {
    let [restaurants, setRestaurants] = React.useState([]);
    React.useEffect(() => {
        axios.get('/restaurant').then(response => {
            let data = response.data.map(x => {
                return new Restaurant(x);
            });
            setRestaurants(data);
        });
    }, []);
    return (
        <ItemListContainer restaurants={restaurants}/>
    );
}

export default Restaurants;