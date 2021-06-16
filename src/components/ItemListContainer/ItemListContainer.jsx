import React from 'react';
import {Restaurants} from "../../api/restaurants";
import './ItemListContainer.css';
import ItemCard from "../ItemCard/ItemCard";


export default function ItemListContainer() {

    const restaurants = Restaurants;

    return (
        <div className='list-container'>
            {restaurants.map((rest, index) => {
                return <ItemCard key={index} restaurant={rest}/>
            })}
        </div>
    );
}
