import { useDispatch, useSelector } from "react-redux";
import './Categories.css'
import {filterAction} from "../redux/action";
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

  return (
    <div>

      <div className='shopCategoriesTypes'>
        {inputCategories.map(({ id, title }) => {
          return (
            <div key={id}>
              <label>
                <input onChange={showTypes} type="checkbox" id={id} name={id} />
                <span>{title}</span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
