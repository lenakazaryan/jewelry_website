import React, {useEffect} from 'react';
import './SliderRef.css'
import { leftSideSlider } from '../../../helpers/constants';
// import {Link} from 'react-router-dom';
import LinkedImageCard from '../../ImageCards/LinkedImageCard';
import imageInfo from './data';

function References() {

    useEffect(()=>{
        const M = window.M;
        const ref_left_carousel = document.querySelectorAll('.ref_left_carousel');
        const left_carousel_instances = M.Carousel.init(ref_left_carousel, {
            'fullWidth': true,
        });
        
        const left_carousel_item = document.querySelector(".ref_left_carousel");
        const left_next = M.Carousel.getInstance(left_carousel_item);
        const leftSideCarouselId = setInterval(() => {
            left_next.next(1);
        }, 1000);

    }, [])

    return (
        <section>
        <div class="main_ref_pages_container">
            <div class="main_ref_page ref_left_slider">
                <div class="ref_left_slider_container">
                    <div class="carousel carousel-slider ref_left_carousel">
                        {leftSideSlider.map((image, index)=>{
                            return (
                                <div key={index} class="carousel-item">
                                <div class="ref_left_image_container">
                                    <img class="materialboxed  materialboxed_image_cursor" src={image} />
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <LinkedImageCard {...imageInfo} />
        </div>
    </section>
    )
}

export default References
