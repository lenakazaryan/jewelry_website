import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import bucket from '../../assets/images/bucket.png';
import BucketProductItem from './BucketProductItem';
import { useGlobalContext } from '../../helpers/bucketContext';


function Bucket() {
    const {productsQuantity, list, totalPrice} = useGlobalContext();

    return <>
        <div className="header_middle">
            <a href="#main_bucket_modal" className="header_bucket_container col 12 offset-l11 right modal-trigger">
                <div className="header_bucket_image">
                    <img src={bucket} alt="bucket.png" />
                </div>
                <div className="header_bucket_counter">
                    <span className="white-text">{productsQuantity}</span>
                </div>
            </a>
        </div>
                
        <div id="main_bucket_modal" className="modal">
            <div className="modal-close modal_close_btn waves-effect black-text">
                <i className="material-icons">close</i>
            </div>
            <div className="modal-content row">
                <div className="col s12">
                    <h4 className="bucket_modal_title">Shopping cart</h4>
                    { list.length > 0 ? 
                        <> 
                            {
                                list.map(product =>{
                                    const {name} = product;
                                    return (
                                        <BucketProductItem key={name} {...product}/>
                                    )
                                }) 
                            }
                            <div className="bucket_modal_bottom row">
                                <div className="col s6">
                                    <h6 className="bold left">TOTAL</h6>
                                </div>
                                <div className="col s6">
                                    <p className="right bold"><span>$</span> <span>{totalPrice}</span></p>
                                </div>
                            </div>
                            <p className='left'>Looking for more? <Link to='./Shop' className="main_link">Continue shopping</Link></p> 
                        </>
                        : <p className="center">Your shopping cart is empty</p>            
                    }
                </div>
            </div>
        </div>    
    </>
}

export default Bucket;
