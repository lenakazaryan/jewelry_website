import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getJewelryAction } from "../redux/action";
import styles from "../ShopItem/ShopItem.module.css";
import SortBy from "../SortBy/SortBy";
import ProductCard from "../ProductCard/ProductCard";

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
      <div className={styles.shopBlocksContainer}>
        <div className={styles.shopItemsList}>
          {
            jewelry.map((product) => {
              return (
                <ProductCard {...product} />
              );
            })}
        </div>
    </div>
  );
}

export default ShopItem;


 