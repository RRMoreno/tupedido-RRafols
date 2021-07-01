import React from 'react';
import axios from "axios";
import PlateCard from "../PlateCard/PlateCard";
import './PlatesList.scss';

function PlateList(props) {
    let [plates, setPlates] = React.useState([]);
    const getPlates = ()=> {
        axios.get('/plates').then(response => {
            setPlates(response.data);
        });
    };
    React.useEffect(() => {
        getPlates();
    }, []);
    return (
        <div className='plates-container'>
            {
                plates.map((plate, index) => {
                    return <PlateCard plate={plate} key={index}/>
                })
            }
        </div>
    );
}

export default PlateList;