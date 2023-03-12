import React from "react";
import "./Login.css";
import { LoginHook } from "./LoginHook";
const Login = () => {
  return (
    <div className="wrapper">
      <div className="form-box login">
        <h2>Login</h2>
        <LoginHook />
      </div>
    </div>
  );
};
export default Login;
