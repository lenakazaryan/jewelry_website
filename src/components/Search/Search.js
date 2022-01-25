import styles from "../Search/Search.module.css";
import logo from "../../assets/images/fb.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getJewelryAction,
  searchJewelryAction,
  setFilterValue,
} from "../redux/action";
import { useDebounce } from "../hooks/useDebounce";

function Search() {
  const jewelryData = useSelector((state) => state.getJewelryReducer?.jewelry);

  // const [initialState, setInitialState] = useState(jewelryData);
  // console.log(initialState, "i")

  const [searchValue, setSearchValue] = useState("");
  const [filtredElement, setFiltredElement] = useState([]);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setSearchValue(e.target.value);
    const filtredElement = jewelryData.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFiltredElement(filtredElement);
  };

  const debouncedSearchTerm = useDebounce(filtredElement, 500);

  useEffect(() => {
    console.log(filtredElement, "P");
    if (searchValue.length > 0) {
      dispatch(setFilterValue(searchValue));
    }
    // else if (searchValue === "") {
    //   dispatch(getJewelryAction());
    // }
  }, [debouncedSearchTerm]);

  return (
    <div>
      <div className={styles.searchContainer}>
        <img className={styles.searchImg} src={logo} />
        {/* <input type="text" placeholder="Search..." name="search" /> */}
        <input
          type="text"
          value={searchValue}
          placeholder="Search"
          onChange={changeHandler}
        />
      </div>
    </div>
  );
}

export default Search;