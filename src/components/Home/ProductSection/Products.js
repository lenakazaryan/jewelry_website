import React from 'react';
import './Products.css';
import ProductCard from '../../ProductCard/ProductCard';

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
              {productList.map(product => <ProductCard key = {product.id} {...product} />)}
            </div>
        </div>
    </section>
  )
}

export default Products;