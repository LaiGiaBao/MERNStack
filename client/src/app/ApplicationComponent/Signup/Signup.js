import React from "react";
import { SignupHook } from "./SignupHook";
// import "../Login/Login.css";
import "./Signup.css";
const Signup = () => {
  return (
    <div className="wrapper signup">
      <div className="form-box signup">
        <h2>Sign Up</h2>
        <SignupHook />
      </div>
    </div>
  );
};

export default Signup;
