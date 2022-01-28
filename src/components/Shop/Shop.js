import ShopFilters from "../ShopFilters/ShopFilters";
import ShopItem from "../ShopItem/ShopItem";
import "./Shop.css";
import Filter from "../Filters/Filters"

function Shop() {
  return (
    <section>
      <div className="container shop_section_container">
        <ShopFilters />
        <ShopItem />
      </div>
    </section>
  );
}

export default Shop;
