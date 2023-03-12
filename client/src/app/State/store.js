import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

// reducers
import userReducer from "./User/userReducer";
import productReducer from "./Product/ProductReducer";
import cartReducer from "./Cart/CartReducer";
const logger = () => (next) => (action) => {
  console.log("action logger store", logger);
  next(action);
};

const rootReducer = combineReducers({
  userReducer,
  productReducer,
  cartReducer,
});
export default configureStore(
  { reducer: rootReducer },
  {},
  applyMiddleware(logger, thunk)
);
