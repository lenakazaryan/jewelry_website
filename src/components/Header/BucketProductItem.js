import React from 'react';
import { useGlobalContext } from '../../helpers/bucketContext';

function BucketProductItem({...products}) {
    const {image, name, quantity, price} = products;
    const {removeProductFromBucket, addQuantity, extractQuantity} = useGlobalContext()

  return (
    <div className="bucket_product_list">
        <div className="bucket_product">
            <div className="bucket_product_image_container">
                <div className="bucket_product_image">
                    <img src={image} alt="product image" />
                </div>
            </div>
            <div className="bucket_product_name">
                <p className='left'>{name}</p>
            </div>
            <div className="bucket_product_delete_icon" onClick={()=>removeProductFromBucket(products)}>
                <i className="material-icons right">close</i>
            </div>
            <div className="bucket_product_count_container">
                <span>QTY: </span>
                <span className="bucket_decrease_btn" onClick={() => extractQuantity(name)}><i className="fas fa-minus"></i></span>
                <span className="bucket_product_count">{quantity}</span>
                <span className="bucket_increase_btn" onClick={() => addQuantity(name)}><i className="fas fa-plus"></i></span>
            </div>
            <div className="bucket_product_price">
                <p className="right bold"><span>$</span><span>{price * quantity}</span></p>
            </div>
        </div>
    </div>
  )
}

export default BucketProductItem;
