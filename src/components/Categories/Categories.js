import { useDispatch, useSelector } from "react-redux";
import styles from "../Categories/Categories.module.css";
import { setCategory } from "../redux/action";

const inputCategories = [
  {
    id: "bracelets",
    title: "Bracelets",
  },
  {
    id: "earrings",
    title: "Earrings",
  },
  {
    id: "necklaces",
    title: "Necklaces",
  },
  {
    id: "ring",
    title: "Rings",
  },
];

function Categories() {
  const dispatch = useDispatch();
  const filteredElements = useSelector(
    (state) => state.getJewelryReducer.filters
  );

  function showTypes(e) {
    dispatch(setCategory(e.target.name));
  }
  // if(e.target.checked !== checked){
  //   dispatch(filterAction(e.target.name))
  //   console.log("checked")
  // }
  // else{
  //   console.log("not")
  // }

  return (
    <div>
      <div className={styles.shopCategoriesTypes}>
        {inputCategories.map(({ id, title }) => {
          return (
            <div key={id}>
              <input onChange={showTypes} type="checkbox" id={id} name={id} />
              <label htmlFor="bracelets">{title}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
