import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartItemHook } from "./CartItemHook.js";
export const CartHook = () => {
  const cart = useSelector((state) => state.cartReducer);
  return (
    <table className="tg">
      <thead>
        <tr>
          <th className="tg-0pky tg--title--item">Item</th>
          <th className="tg-0pky">Quantity</th>
          <th className="tg-0pky">Price</th>
          <th className="tg-0lax"></th>
        </tr>
      </thead>
      <tbody>
        {cart.map((p) => (
          <tr>
            <CartItemHook item={p} key={p._id} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
