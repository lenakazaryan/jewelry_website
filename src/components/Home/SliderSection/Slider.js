import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Slider.css';
import {sliderImages} from '../../../helpers/constants';

function Slider() {
    useEffect(()=>{
        const M = window.M;
        const carousels = document.querySelectorAll('.main_carousel');
        M.Carousel.init(carousels, {
            'fullWidth': true,
            indicators: true
        });

        const el = document.querySelector(".main_carousel");
        const l = M.Carousel.getInstance(el);    
        setInterval(() => {
            l.next(1);
        }, 3000);
    }, [])

    return (
        <section className="main_slider_section">
        <div className="main_slider_container">
            <div className="carousel carousel-slider main_carousel">
                {sliderImages.map((image, index) =>{
                    return <Link to='/shop' key={index} href="#" className="carousel-item main_carousel_item">
                        <div className="main_carousel_image_container">
                            <img className="materialboxed  materialboxed_image_cursor" src={image} alt='slider image' />
                        </div>
                    </Link>
                })}
            </div>
        </div>
    </section>
    )
}

export default Slider
