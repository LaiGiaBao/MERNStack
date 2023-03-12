import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Actions
import { loginUser } from "../../State/User/UserActions";
// icons
import { Person, LockClosed } from "react-ionicons";

export const LoginHook = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const user = useSelector((state) => state.userReducer);
  let dispatchLogin = useDispatch();
  let loginForm = (e) => {
    let login = {
      username,
      password,
    };
    dispatchLogin(loginUser(login));
    navigate("/");
    e.preventDefault();
  };
  useEffect(() => {
    return () => {
      console.log("unmounted");
    };
  }, [user]);
  return (
    <form action="" onSubmit={loginForm}>
      <div className="input-box">
        <span className="icon">
          <Person
            height={"1.2em"}
            width={"1.2em"}
            color={"var(--color-primary)"}
          />
        </span>
        <input
          type="text"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Username</label>
      </div>
      <div className="input-box">
        <span className="icon">
          <LockClosed
            height={"1.2em"}
            width={"1.2em"}
            color={"var(--color-primary)"}
          />
        </span>
        <input
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Password</label>
      </div>
      <div className="remember-forgot">
        <label>
          <input type="checkbox" />
          Remember me
        </label>
        <NavLink>Forgot Password?</NavLink>
      </div>
      <button type="submit" className="login--btn">
        Login
      </button>
      <div className="login-register">
        <p>
          Don't have an account?{" "}
          <NavLink className="signup-link" to="/signup">
            Sign Up
          </NavLink>
        </p>
      </div>
    </form>
  );
};
