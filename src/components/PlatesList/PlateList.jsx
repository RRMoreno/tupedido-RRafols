import React from 'react';
import PlateCard from "../PlateCard/PlateCard";
import './PlatesList.scss';

function PlateList(props) {
    const {plates} = props;

    return (
        <div className='list-container'>
            {plates && plates.length > 0 && plates.map((plate, index) => {
                return <PlateCard key={index} plate={plate}/>
            })}
        </div>
    );

}

export default PlateList;