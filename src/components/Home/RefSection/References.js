import React from 'react';
import './References.css'
import { leftSideSlider } from '../../../helpers/constants';

function References() {

    const M = window.M;
    document.addEventListener('DOMContentLoaded', function() {
        const ref_left_carousel = document.querySelectorAll('.ref_left_carousel');
        const left_carousel_instances = M.Carousel.init(ref_left_carousel, {
            'fullWidth': true,
        });

        setInterval(() => {
            const left_carousel_item = document.querySelector(".ref_left_carousel");
            const left_next = M.Carousel.getInstance(left_carousel_item);
            left_next.next(1);
        }, 1000);
    })


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
            <a href="#" class="main_ref_page main_ref_first">
                <div class="main_ref_image_container">
                    <img src="https://static.ucraft.net/fs/ucraft/userFiles/preview-acc/images/78-alve-odonnell-607078-unsplash-anf1.jpg?v=1579013170" alt="ref image" />
                </div>
                <span class="main_ref_page_title white-text">Inspiration</span>
                <span class="ref_page_arrow white-text">  <i class="material-icons ref_arrow_icon">arrow_downward</i></span>
            </a>
        </div>
    </section>
    )
}

export default References
