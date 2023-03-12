import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Redirect,
  Route,
} from "react-router-dom";
import "./app.css";

// Common Components
import { Header } from "./CommonComponent/Header/Header.js";

// Application Components
import { Login, Signup, Home, Cart } from "./ApplicationComponent";
export const RouterComponent = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};
