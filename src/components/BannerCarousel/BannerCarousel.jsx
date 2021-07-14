import React from 'react';
import {Carousel} from "react-bootstrap";
import './BannerCarousel.scss'


function BannerCarousel(props) {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.pinimg.com/originals/65/aa/a4/65aaa478fb7104cd655b5f826aad1aec.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="http://www.intelligentcio.com/apac/wp-content/uploads/sites/44/2020/07/1000-new.jpg"
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://static.vecteezy.com/system/resources/previews/001/664/520/non_2x/safe-food-delivery-concept-banner-vector.jpg"
                    alt="Third slide"
                />


            </Carousel.Item>
        </Carousel>
    );
}

export default BannerCarousel;


