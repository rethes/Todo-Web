import * as types from "../actionTypes";

import { categoryApi } from "../../../api";

/** Redux Action Creators */

export const getCategoriesSuccess = (categories) => {
  return {
    type: types.GET_ALL_CATEGORIES_SUCCESS,
    categories
  }
}

export const getCategoriesFailure = (errors) => {
  return {
    type: types.GET_ALL_CATEGORIES_FAILURE,
    errors
  }
}

/** API calls */

export function getCategories() {
  return function(dispatch) {
    return categoryApi
      .getAllCategories()
      .then(response => {
        debugger
        if (response.status === 200) {
          dispatch(getCategoriesSuccess(response.data));
        } else {
          dispatch(getCategoriesFailure(response.data));
        }
      })
      .catch(error => {
        throw error;
      });
  };
}





