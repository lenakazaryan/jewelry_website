import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getJewelryAction } from "../redux/action";
import styles from "../ShopItem/ShopItem.module.css";
import SortBy from "../SortBy/SortBy";


function ShopItem() {
  const dispatch = useDispatch();
  const {jewelry} = useSelector(({getJewelryReducer}) => getJewelryReducer);
  const [isOpen, setIsopen] = useState(false);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(getJewelryAction(data));
      });
  }, []);

  return (
    <div>
      <div className={styles.shopSortBy}>
        <div>
          <span>Sort By:</span>
          <SortBy style={{ display: isOpen ? "block" : "none" }} />
        </div>
      </div>
      <div className={styles.shopBlocksContainer}>
        <div className={styles.shopItemsList}>
          {
            jewelry.map((item) => {
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

export default ShopItem;
