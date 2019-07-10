import { combineReducers } from "redux";
/** Categories Reducer */
import categories from "./categoriesReducer";

const rootReducer = combineReducers({
  categories
});

export default rootReducer;
