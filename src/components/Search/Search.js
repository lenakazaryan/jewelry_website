import styles from "../Search/Search.module.css";
import logo from "../../assets/images/fb.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useReducer, useState, useRef } from "react";
import {
  getJewelryAction,
  searchJewelryAction,
  setFilterValue,
} from "../redux/action";
import { useDebounce } from "../hooks/useDebounce";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const timeoutRef = useRef(null);

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      dispatch(setFilterValue(searchValue));
    }, 400);
  }, [searchValue]);

  const changeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <div>
        <div className={styles.searchContainer}>
          <div className={styles.searchIcon}>
            <i class="fas fa-search"></i>
          </div>
            <input
              className={styles.shopSearchInput}
              type="text"
              value={searchValue}
              placeholder="Search"
              onChange={changeHandler}
            />
        </div>
      </div>
    </div>
  );
}

export default Search;
