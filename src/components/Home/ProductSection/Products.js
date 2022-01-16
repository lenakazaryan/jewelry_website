import React from 'react';
import './Products.css';

function Products({title, productList}){
    return (
      <section className="main_products_section">
          <div className="main_page_container">
              <div className="main_products_title">
                  <h3>{title}
                      <span className="section_underline"></span>
                  </h3>
              </div>
              <div className="main_product_list">
                {productList.map(product =>{
                    const {id, name, image, price} = product;
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
                })}
              </div>
          </div>
      </section>
    )
  }

export default Products;