import React from 'react';
import './ImageSlider.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import img1 from '../../image/ImageSlider/img1.png';
import img2 from '../../image/ImageSlider/img2.png';
import img3 from '../../image/ImageSlider/img3.png';
import img4 from '../../image/ImageSlider/img4.png';

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
                    {/* <img src={img1} alt="" /> */}
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                </Slider>
            </div>
        </div>
    )
}
