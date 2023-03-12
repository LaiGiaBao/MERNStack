import * as ActionTypes from "../ActionTypes";
import axios from "axios";
export const getProductsFromDB = (products) => {
  return {
    type: ActionTypes.PRODUCT_GETALL,
    payload: products,
  };
};
export const getAllProducts = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:9000/api/get")
      .then((res) => {
        let productsData = res.data;
        dispatch(getProductsFromDB(productsData));
      })
      .catch((e) => {
        alert(e);
      });
  };
};
