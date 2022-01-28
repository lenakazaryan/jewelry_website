import ShopFilters from "../ShopFilters/ShopFilters";
import ShopItem from "../ShopItem/ShopItem";
import "./Shop.css";
import Filter from "../Filters/Filters"

function Shop() {
  return (
    <section className="shopSection">
      <div className="shop_section_container">
        <ShopFilters />
        <ShopItem />
      </div>
    </section>
  );
}

export default Shop;
