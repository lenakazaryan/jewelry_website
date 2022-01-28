import React from 'react';
import './ProductCard.css';
import { useGlobalContext } from '../../bucketContext';

function ProductCard({...products}) {
  const {name, image, price} = products;
  const { isAdded, addProductToBucket }= useGlobalContext();


  return (
    <article className="main_product_card">
        <a href="#" className="main_product_card_container">
            <div className="main_product_image_container">
                <img src={image} alt={name} />
            </div>
        </a>

        {
          isAdded ? <div className="main_product_add_btn white-text" >Added</div> : 
            <div className="main_product_add_btn white-text" 
                onClick={()=>{addProductToBucket(products)}}>Add to card 
            </div>
        }
  
        <a className="main_card_name" href="#">{name.length <= 15 ? name : name.slice(0,32) + '...'}</a>
        <p><span>$</span> <span>{price}</span></p>
    </article>
  )
}

export default ProductCard;
