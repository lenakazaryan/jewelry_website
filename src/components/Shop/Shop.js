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
      <p>Sort by : Recommended</p>
      <div className={styles.shopBlocksContainer}>
        <div>
          <div >
            <Dropdown Component={Categories} title={"Categories"} />
          </div>
          <div>
            <Dropdown Component={Categories} title={"Categories"} />
          </div>
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
