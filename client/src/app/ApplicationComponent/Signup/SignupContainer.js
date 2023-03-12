import { Signup } from "./Signup";
import { connect } from "react-redux";
import { signupUser } from "../../State/User/UserActions";

let mapStateToProps = (state) => {
  return {
    User: state.userReducer,
  };
};
let mapDispatchToStore = (dispatch) => {
  return {
    SignupUser: (user) => {
      dispatch(signupUser(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToStore)(Signup);
