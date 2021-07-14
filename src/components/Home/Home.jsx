import React from 'react';
import BannerCarousel from "../BannerCarousel/BannerCarousel";
import Supermarket from "../Supermarket/Supermarket";

function Home() {
    return (
        <div>
            <BannerCarousel/>
            <div className="container">
                <Supermarket/>
            </div>
        </div>
    );

}

export default Home;