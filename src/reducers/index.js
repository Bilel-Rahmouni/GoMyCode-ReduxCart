import counterReducer from "./shop";
import isLoggedReducer from "./isLogged";
import shop from "./shop";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: isLoggedReducer,
  shop: shop,
});
export default allReducers;
