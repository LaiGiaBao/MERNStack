import React from "react";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export const Header = () => {
  const user = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  let toLogin = () => {
    navigate("/login");
  };
  return (
    <header>
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <h2 className="logo">Logo</h2>
      </NavLink>
      <nav className="navigation">
        <NavLink to="/">Home</NavLink>
        {user._id && <NavLink to="/cart">Cart</NavLink>}
        <NavLink>About</NavLink>
        {user._id ? (
          <span className="hello-user">Hi, {user.username}</span>
        ) : (
          <button className="btn__login--popup" onClick={toLogin}>
            Login
          </button>
        )}
      </nav>
    </header>
  );
};
