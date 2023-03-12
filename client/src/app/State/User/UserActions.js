import * as ActionTypes from "../ActionTypes";
import axios from "axios";
export const addUserToStore = (user) => {
  return {
    type: ActionTypes.USER_SIGNUP,
    payload: user,
  };
};
export const getUserFromDB = (user) => {
  return {
    type: ActionTypes.USER_LOGIN,
    payload: user,
  };
};
export const signupUser = (user) => {
  return (dispatch) => {
    axios
      .post("http://localhost:9000/user/api/signup", user)
      .then((res) => {
        let userData = res.data;
        dispatch(addUserToStore(userData));
      })
      .catch((e) => {
        alert(e);
      });
  };
};
export const loginUser = (user) => {
  console.log(user);
  return (dispatch) => {
    axios
      .post("http://localhost:9000/user/api/login", user)
      .then((res) => {
        let userData = res.data;
        dispatch(getUserFromDB(userData));
      })
      .catch((e) => {
        alert(e);
      });
  };
};
