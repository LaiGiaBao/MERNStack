import * as ActionTypes from "../ActionTypes";
let initialState = [];

let productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.PRODUCT_GETALL:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
export default productReducer;
