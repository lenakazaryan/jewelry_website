import { useDispatch, useSelector } from "react-redux";
import styles from "../Categories/Categories.module.css";
 import {filterAction} from "../redux/action";


function Categories() {

  const dispatch = useDispatch();
  let checked = false;
  let res;
  const filteredElements = useSelector((state) => state.getJewelryReducer.filters);
  console.log(filteredElements, "ff")

 

  function showTypes(e){
     if(e.target.checked !== checked){
      dispatch(filterAction(e.target.name))
      console.log("checked")
    }
    if(filteredElements.find(e.target.name)){
      console.log(e.target.name, "etargetname")
      res = filteredElements.filter(item => item == e.target.name);
      console.log(res, "res")
    } else{
      filteredElements.push(e.target.name)

    }
    

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
        <div>
          <input onChange={showTypes}  type="checkbox" id="bracelets" name="bracelets" />
          <label htmlFor="bracelets">Bracelets</label>
        </div>
        <div>
          <input onChange={showTypes}  type="checkbox" id="earrings" name="earrings" />
          <label htmlFor="earrings">Earrings</label>
        </div>
        <div>
          <input onChange={showTypes}  type="checkbox" id="necklaces" name="necklaces" />
          <label htmlFor="necklaces">Necklaces</label>
        </div>
        <div>
          <input onChange={showTypes}  type="checkbox" id="rings" name="rings" />
          <label htmlFor="rings">Rings</label>
        </div>
      </div>
    </div>
  );
}

export default Categories;
