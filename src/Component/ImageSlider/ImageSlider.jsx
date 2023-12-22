import React from 'react';
import './ImageSlider.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ImageSlider() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 6000,
        // cssEase: 'linear ',
    };

    return (
        <div className='imageSlider-container'>
            <div className='card-container'>
                <Slider {...settings}>
                    <div className="lobby1"></div>
                    <div className="lobby2"></div>
                    <div className="bedroom"></div>
                    <div className="open"></div>
                </Slider>
            </div>
        </div>
    )
}
