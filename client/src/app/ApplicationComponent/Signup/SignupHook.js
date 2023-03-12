import React, { useEffect, useState } from "react";
import { Person, LockClosed, Mail } from "react-ionicons";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { signupUser } from "../../State/User/UserActions";
export const SignupHook = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  let dispatchSignup = useDispatch();
  let user = useSelector((state) => state.userReducer);
  let signupForm = (e) => {
    let user = {
      username,
      password,
      email,
    };
    dispatchSignup(signupUser(user));
    e.preventDefault();
  };
  useEffect(() => {
    return () => {
      console.log("unmounted");
    };
  }, [user]);

  return (
    <form action="" onSubmit={signupForm}>
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
      <div className="input-box">
        <span className="icon">
          <Mail
            height={"1.2em"}
            width={"1.2em"}
            color={"var(--color-primary)"}
          />
        </span>
        <input
          type="text"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Email:</label>
      </div>

      <div className="remember-forgot">
        <label>
          <input type="checkbox" required />
          Agree to the terms & condition
        </label>
      </div>
      <button type="submit" className="btn">
        Signup
      </button>
      <div className="login-register">
        <p>
          Already have an account?{" "}
          <NavLink className="login-link" to="/">
            Login
          </NavLink>
        </p>
      </div>
    </form>
  );
};
