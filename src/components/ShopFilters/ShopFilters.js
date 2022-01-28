import Dropdown from "../Dropdown/Dropdown";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import arrowLogo from "../../assets/images/arrow.png";
import { useState } from "react";
import './ShopFilters.css'

function ShopFilters() {
  const [isOpen, setIsopen] = useState(false);

  const toggle = () => {
    setIsopen((prev) => !prev);
  };
  return (
    <div >
      <div>
        <Dropdown Component={Categories} title={"Categories"} />
      </div>
      <div>
        <Dropdown Component={Search} title={"Search"} />
      </div>
    </div>
  );
}

export default ShopFilters;
