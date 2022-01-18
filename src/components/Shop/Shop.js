import { useState, useEffect } from "react";
import styles from "../Shop/Shop.module.css";
import Dropdown from "../Dropdown/Dropdown";
// import Element from "../Dropdown/Element";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import SortBy from "../SortBy/SortBy";
import arrowLogo from "../../assets/images/arrow.png";

function Shop() {
  const [data, setData] = useState([]);
  const [isOpen, setIsopen] = useState(false);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  const toggle = () => {
    setIsopen((prev) => !prev);
  };

  return (
    <div>
      <div className={styles.shopSortBy}>
        <div>
          <span>Sort By:</span>
          <img onClick={toggle} src={arrowLogo} className={`${styles.arrowLogo} ${isOpen && styles.logoRotate}`} />
          <SortBy style={{ display: isOpen ? "block" : "none" }} />
        </div>
      </div>
      <div className={styles.shopBlocksContainer}>
        <div>
          <div>
            <Dropdown Component={Categories} title={"Categories"} />
          </div>
          <div>
            <Dropdown Component={Search} title={"Search"} />
          </div>
          <div>
            <Dropdown Component={Categories} title={"Price"} />
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
