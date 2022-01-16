import { useState, useEffect } from "react";
import styles from "./Dropdown.module.css";
import arrowLogo from "../../assets/images/arrow.png";

function Dropdown({ Component, title }) {
  const [isOpen, setIsopen] = useState(false);

  const toggle = () => {
    setIsopen((prev) => !prev);
  };

  return (
    <>
      <div onClick={toggle} className={styles.dropdownContainer}>
        <p>{title}</p>
        <img className={styles.arrowLogo} src={arrowLogo} />
      </div>
      <div className={`${styles.classToggle} ${isOpen && styles.opened}`}>
        <span className={styles.line}></span>
        <Component />
      </div>
    </>
  );
}

export default Dropdown;
