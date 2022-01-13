import { useState, useEffect } from "react";
import styles from "./Dropdown.module.css";
import arrowLogo from "../../assets/images/arrow.png";
import Categories from "../Shop/Categories/Categories";

function Dropdown({ Component }) {
  const [isOpen, setIsopen] = useState(false);

  const toggle = () => setIsopen((prev) => !prev);

  return (
    <div>
      <button onClick={toggle}>
          <img className={styles.arrowLogo} src={arrowLogo}/></button>
      {isOpen ? <Categories /> : null}
    </div>
  );
}

export default Dropdown;
