import { combineReducers } from "redux";
import { productsReducer, productSelectedReducer } from "./product-reducer";

const reducers = combineReducers({
  products: productsReducer,
  product: productSelectedReducer,
});
export default reducers;
