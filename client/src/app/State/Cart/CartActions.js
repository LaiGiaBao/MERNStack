import axios from "axios";
import * as ActionTypes from "../ActionTypes";
export const ProductToCart = (product) => {
  return {
    type: ActionTypes.CART_ADD,
    payload: product,
  };
};
export const CartToDB = (cart) => {
  return {
    type: ActionTypes.CART_TO_DB,
  };
};
export const ShowCart = () => {
  return {
    type: ActionTypes.CART_SHOW,
  };
};
export const UpdateProductInCart = (_id, qty, subTotal) => {
  return {
    type: ActionTypes.CART_UPDATE,
    payload: { _id, qty, subTotal },
  };
};
export const RemoveFromCart = (p) => {
  return {
    type: ActionTypes.CART_REMOVE_ITEM,
    payload: p,
  };
};
export const UpdateTotalInCart = (total) => {
  return {
    type: ActionTypes.CART_UPDATE_TOTAL,
    payload: total,
  };
};
export const updateTotalInCart = (total) => {
  return (dispatch) => {
    dispatch(UpdateTotalInCart(total));
  };
};
export const addProductToCart = (product) => {
  return (dispatch) => {
    dispatch(ProductToCart(product));
  };
};
export const removeProductFromCart = (product) => {
  return (dispatch) => {
    dispatch(RemoveFromCart(product));
  };
};
export const updateProductInCart = (qty, subTotal) => {
  return (dispatch) => {
    dispatch(UpdateProductInCart(qty, subTotal));
  };
};
export const addProductToDB = (cart) => {
  return (dispatch) => {
    axios
      .post("http://localhost:9000/cart/api/add-cart", cart)
      .then((res) => {
        let cartData = res.data;
        dispatch(CartToDB(cartData));
      })
      .catch((e) => {
        alert(e);
      });
  };
};
export const showCart = () => {
  return (dispatch) => {
    dispatch(ShowCart());
  };
};
