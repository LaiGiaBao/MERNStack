import * as ActionTypes from "../ActionTypes";
let initialState = [];

let cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CART_ADD:
      return [...state, action.payload];
    case ActionTypes.CART_SHOW:
      return state;
    case ActionTypes.CART_TO_DB:
      return state;
    case ActionTypes.CART_REMOVE_ITEM:
      return state.filter((item) => item._id !== action.payload._id);
    case ActionTypes.CART_UPDATE_TOTAL:
      return {
        state,
        total: action.payload.total,
      };
    case ActionTypes.CART_UPDATE:
      return state.map((item) => {
        if (item._id == action.payload._id) {
          //update the qty of item we want to update with selected id
          return {
            ...item,
            qty: Number(action.payload.qty),
            subTotal: Number(action.payload.subTotal.toFixed(2)),
          }; //...item means {name, desc, rating, qty, price}
        }
        return item; //for all other items in cart do not update anything
      });
    default:
      return state;
  }
};
export default cartReducer;
