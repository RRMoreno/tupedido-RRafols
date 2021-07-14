import React, {useEffect, useState} from 'react';
import BannerCarousel from "../BannerCarousel/BannerCarousel";
import Supermarket from "../Supermarket/Supermarket";
import PlateList from "../PlatesList/PlateList";
import {getFirestore} from "../../firebase";
import Plate from "../../models/plates";


function Home() {

    const [plates, setPlates] = useState(undefined);

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
    }, []);
    return (
        <div>
            <BannerCarousel/>
            <div className="container">
                <Supermarket/>
                <PlateList plates={plates}/>
            </div>
        </div>
    );

}

export default Home;