import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "../../src/reducers/index";
import recipeReducer from "../reducers/recipeReducer";

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk));

const store = createStore(
  recipeReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
