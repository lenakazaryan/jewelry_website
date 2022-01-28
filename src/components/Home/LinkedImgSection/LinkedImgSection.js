import React from 'react';
import './LinkedImgSection.css';
import LinkedImageCard from '../../ImageCards/LinkedImageCard';

function LinkedImgSection({data}) {
    return (
        <section>
            <div className="main_linked_section_container">
                {
                    data.map((img, index)=>{
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