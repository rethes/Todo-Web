import * as types from "../actions/actionTypes";
import { initialState } from "../../data/initialState";

const initialCategoriesState = initialState.categories;

const categoriesReducer = (state = initialCategoriesState, action) => {
  switch (action.type) {
    case types.GET_ALL_CATEGORIES_SUCCESS:
      return Object.assign({}, state, {
        categories: action.categories.data.categories,
        errorMessage: ""
      });

    case types.GET_ALL_CATEGORIES_FAILURE:
      return Object.assign({}, state, {
        categories: [1],
        errorMessage: action.errors.message
      });

    default:
      return state;
  }
}

export default categoriesReducer;

