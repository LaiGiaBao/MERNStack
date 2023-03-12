import { Login } from "./Login";
import { connect } from "react-redux";
import { loginUser } from "../../State/User/UserActions";

let mapStateToProps = (state) => {
  return {
    User: state.userReducer,
  };
};

let mapDispatchToStore = (dispatch) => {
  return {
    loginUser: (user) => {
      dispatch(loginUser(user));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToStore)(Login);
