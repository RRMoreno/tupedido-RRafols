import React from 'react';
import './ItemListContainer.css';
import ItemCard from "../ItemCard/ItemCard";


export default function ItemListContainer(props) {

    const {restaurants} = props;

    return (
        <div className='list-container'>
            {restaurants.map((rest, index) => {
                return <ItemCard key={index} restaurant={rest}/>
            })}
        </div>
    );
}
