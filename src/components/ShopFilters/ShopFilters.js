import Dropdown from "../Dropdown/Dropdown";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import arrowLogo from "../../assets/images/arrow.png";
import { useState } from "react";
import styles from "../Shop/Shop.module.css";
import Price from  "../Price/Price";

function ShopFilters() {
  const [isOpen, setIsopen] = useState(false);

  const toggle = () => {
    setIsopen((prev) => !prev);
  };
  return (
    <div >
      {/* <img
        onClick={toggle}
        src={arrowLogo}
        className={`${styles.arrowLogo} ${isOpen && styles.logoRotate}`}
      /> */}
      <div>
        <Dropdown Component={Categories} title={"Categories"} />
      </div>
      <div>
        <Dropdown Component={Search} title={"Search"} />
      </div>
      <div>
        <Dropdown Component={Price} title={"Price"} />
      </div>
    </div>
  );
}

export default ShopFilters;
