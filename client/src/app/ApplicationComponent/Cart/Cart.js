import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartHook } from "./CartHook";
import { addProductToDB } from "../../State/Cart/CartActions";
import "./Cart.css";
const Cart = () => {
  const cart = useSelector((state) => state.cartReducer);
  const userId = useSelector((state) => state.userReducer._id);
  const cartDispatch = useDispatch();
  let [total, setTotal] = useState(0);
  const totalPrice = (cart) => {
    let total = 0;
    for (let item of cart) {
      total += item.subTotal;
    }
    return total;
  };
  useEffect(() => {
    setTotal(totalPrice(cart));

    return () => {};
  }, [cart]);
  const checkOut = (e) => {
    let userCart = {
      userId,
      items: cart,
      total,
    };
    console.log(userCart);
    cartDispatch(addProductToDB(userCart));
    e.preventDefault();
  };
  return (
    <div className="container">
      {cart.length > 0 ? (
        <>
          <h2>Shopping Cart</h2>
          <CartHook />
          <h3 className="cart--total">Total:{total.toFixed(2)}</h3>
          <button onClick={(e) => checkOut(e)} className="cart--checkout--btn">
            {" "}
            Check Out
          </button>
        </>
      ) : (
        <h1 className="cart--empty-title">Your cart is empty at this time</h1>
      )}
    </div>
  );
};
export default Cart;
