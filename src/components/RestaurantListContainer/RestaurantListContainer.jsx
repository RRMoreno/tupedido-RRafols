import React from 'react';
import './RestaurantListContainer.scss';
import ItemCard from "../RestaurantCard/RestaurantCard";


export default function RestaurantListContainer(props) {

    const {restaurants} = props;

    return (
        <div className='list-container'>
            {restaurants.map((rest, index) => {
                return <ItemCard key={index} restaurant={rest}/>
            })}
        </div>
    );
}
