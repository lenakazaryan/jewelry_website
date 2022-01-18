import styles from "../Search/Search.module.css";
import logo from "../../assets/images/fb.png";

function Search() {
  return (
    <div>
      <div className={styles.searchContainer}>
        <img className={styles.searchImg} src={logo}/>
        <input type="text" placeholder="Search..." name="search" />
      </div>
    </div>
  );
}

export default Search;
