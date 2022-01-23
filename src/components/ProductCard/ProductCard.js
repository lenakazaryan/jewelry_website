import React from 'react';
import './ProductCard.css';

function ProductCard({id, name, image, price}) {
  return (
    <article key={id} className="main_product_card">
        <a href="#" className="main_product_card_container">
            <div className="main_product_image_container">
                <img src={image} alt={name} />
            </div>
        </a>
        <a href="#" className="main_product_add_btn white-text"> Add to card</a>
        <a className="main_card_name" href="#">{name.length <= 32 ? name : name.slice(0,32) + '...'}</a>
        <p><span>$</span> <span>{price}</span></p>
    </article>
  )
}

export default ProductCard;
