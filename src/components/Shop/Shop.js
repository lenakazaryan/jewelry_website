import ShopFilters from "../ShopFilters/ShopFilters";
import ShopItem from "../ShopItem/ShopItem";
import styles from "./Shop.module.css";
import Filter from "../Filters/Filters"

function Shop() {
  return (
    <div className={styles.shopComponents}>
      {/* <Filter/> */}
      <ShopFilters />
      <ShopItem />
    </div>
  );
}

export default Shop;
