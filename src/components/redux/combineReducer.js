import { combineReducers } from "redux";
import { jewelryReducer } from "./reducers/reducer";
import { routeReducer } from "./reducers/routeReducer";

const rootReducer = combineReducers({
  getJewelryReducer: jewelryReducer,
  routeReducer,
});

export default rootReducer;
