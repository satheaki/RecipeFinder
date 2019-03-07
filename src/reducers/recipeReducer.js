import {
  FETCH_RECIPES_STARTED,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILED
} from "../actions/types";

const initialState = {
  loading: false,
  recipes: [],
  error: ""
};
const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES_STARTED:
      return {
        ...state,
        loading: true
      };
    case FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        recipes: [...action.payload]
      };

    case FETCH_RECIPES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default recipeReducer;
