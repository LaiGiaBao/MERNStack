import * as ActionTypes from "../ActionTypes";
let initialState = {
  username: "",
  password: "",
};
let userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.USER_SIGNUP:
      return action.payload;
    case ActionTypes.USER_LOGIN:
      return { ...action.payload };
    default:
      return state;
  }
};
export default userReducer;
