import { useState, useEffect } from "react";
import styles from "../Shop/Shop.module.css";
import Dropdown from "../Dropdown/Dropdown";
import Element from "../Dropdown/Element";
import Categories from "./Categories/Categories";

function Shop() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className={styles.shopContainer}>
      <span className={styles.line}></span>
      <p>Sort by : Recommended</p>
      <div className={styles.shopBlocksContainer}>
        <div className={styles.categoryContainer}>
         
        <div className={styles.categoryContainerHeader}>
        <button className={styles.shopCategories}>Categories</button>
          <Dropdown Component={Categories} />
        </div>

          <div className={styles.shopCategoriesLine}></div>
          {/* <div className={styles.shopCategoriesTypes}>
            <div>
              <input type="checkbox" id="bracelets" name="bracelets" />
              <label htmlFor="bracelets">Bracelets</label>
            </div>
            <div>
              <input type="checkbox" id="earrings" name="earrings" />
              <label htmlFor="earrings">Earrings</label>
            </div>
            <div>
              <input type="checkbox" id="necklaces" name="necklaces" />
              <label htmlFor="necklaces">Necklaces</label>
            </div>
            <div>
              <input type="checkbox" id="rings" name="rings" />
              <label htmlFor="rings">Rings</label>
            </div>
          </div> */}
        </div>
        <div className={styles.shopItemsList}>
          {data.map((item) => {
            return (
              <div key={item.id}>
                <img className={styles.shopItemsImages} src={item.img} />
                <p className={styles.shopItemsName}>{item.name}</p>
                <p className={styles.shopItemsName}>{item.description}</p>
                <p className={styles.shopItemsPrice}>{item.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Shop;
