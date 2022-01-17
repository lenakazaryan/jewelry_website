import React, {useEffect} from 'react';
import './Slider.css';
import {sliderImages} from '../../../helpers/constants';

function Slider() {
    useEffect(()=>{
        const M = window.M;
        const carousels = document.querySelectorAll('.main_carousel');
        const carousel_instances = M.Carousel.init(carousels, {
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
        <section class="main_slider_section">
        <div class="main_slider_container">
            <div class="carousel carousel-slider main_carousel">
                {sliderImages.map((image, index) =>{
                    return <a key={index} href="#" class="carousel-item main_carousel_item">
                        <div class="main_carousel_image_container">
                            <img class="materialboxed  materialboxed_image_cursor" src={image} alt='slider image' />
                        </div>
                    </a>
                })}
            </div>
        </div>
    </section>
    )
}

export default Slider
