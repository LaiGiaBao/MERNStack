import * as ActionTypes from "../ActionTypes";
let initialState = [];

let cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CART_ADD:
      return [...state, action.payload];
    case ActionTypes.CART_SHOW:
      return state;
    case ActionTypes.CART_TO_DB:
      return ActionTypes;
    default:
      return state;
  }
};
export default cartReducer;
