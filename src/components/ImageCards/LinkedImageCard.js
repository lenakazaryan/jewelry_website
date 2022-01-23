import React from 'react';
import {Link} from 'react-router-dom';
import './LinkedImageCard.css'

function LinkedImageCard({image, title, textColor, backgroundLayer, hoverEffect, link}) {
  return (
        <div className={`linked_img_card  ${hoverEffect}`}>
            <div className="linked_img_container">
                <Link to={link} className={`${backgroundLayer} linked_img_layer`}></Link>
                <img src={image} alt={title} />
            </div>
            <span className={`linked_img_title ${textColor}`}>{title}</span>
            <span className={`linked_img_arrow ${textColor}`}> <i className="material-icons ref_arrow_icon">arrow_downward</i></span>
        </div>
    )
}

export default LinkedImageCard;
