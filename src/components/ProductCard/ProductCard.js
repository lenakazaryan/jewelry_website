import React from 'react';
import './ProductCard.css';
import { useGlobalContext } from '../../bucketContext';

function ProductCard({...products}) {
  const {name, img, price, description} = products;
  const { isAdded, addProductToBucket }= useGlobalContext();


  return (
    <article className="main_product_card">
        <div className="main_product_card_container">
            <div className="main_product_image_container">
                <img src={img} alt={name} />
            </div>
        </div>

        {
          isAdded ? <div className="main_product_add_btn white-text" >Added</div> : 
            <div className="main_product_add_btn white-text" 
                onClick={()=>{addProductToBucket(products)}}>Add to card 
            </div>
        }

        <div className="main_card_name">{name.length <= 25 ? name : name.slice(0, 25) + '...'}</div>
        <div className="main_card_description">{description}</div>
        <p><span>$</span> <span>{price}</span></p>
    </article>
  )
}

export default ProductCard;
