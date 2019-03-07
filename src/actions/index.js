import {
  FETCH_RECIPES_STARTED,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILED
} from "./types";
import axios from "axios";

export const fetchRecipes = params => {
  return (dispatch, getState) => {
    dispatch(fetchRecipesStarted());

    axios
      .get(
        "https://api.edamam.com/search?q=chicken&app_id=13d288d5&app_key=96f7705b4707987e8f9c21ad8040efe7&from=0&to=4"
      )
      .then(res => {
        console.log(
          res.data.hits.map(item => {
            return item.recipe.label;
          })
        );
        dispatch(fetchRecipesSuccess(res.data.hits));
      })
      .then(error => {
        dispatch(fetchRecipesFailed(error));
      });
  };
};

const fetchRecipesStarted = () => ({
  type: FETCH_RECIPES_STARTED
});

const fetchRecipesSuccess = itemObject => ({
  type: FETCH_RECIPES_SUCCESS,
  payload: itemObject
});

const fetchRecipesFailed = error => ({
  type: FETCH_RECIPES_FAILED,
  payload: {
    error
  }
});
