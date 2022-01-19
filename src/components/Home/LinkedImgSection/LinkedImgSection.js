import React from 'react';
import './LinkedImgSection.css';
import LinkedImageCard from '../../ImageCards/LinkedImageCard';
import imagesInfo from './data';
import imageInfo from '../LeftSliderSection/data';


function LinkedImgSection() {
    return (
        <section>
            <div className="main_linked_section_container">
                {
                    imagesInfo.map((img, index)=>{
                        return (
                            <LinkedImageCard key={index} {...img} /> 
                        )
                    })
                }
        </div>
    </section>
    )
}

export default LinkedImgSection;