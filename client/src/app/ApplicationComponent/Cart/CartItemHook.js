import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeProductFromCart,
  UpdateProductInCart,
} from "../../State/Cart/CartActions";
import "./CartItem.css";
export const CartItemHook = ({ item }) => {
  const cartDispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const [subTotal, setSubTotal] = useState(item.price);
  const cart = useSelector((state) => state.cart);
  const itemDispatch = useDispatch();
  const removeItem = (p) => {
    cartDispatch(removeProductFromCart(p));
  };
  useEffect(() => {
    itemDispatch(UpdateProductInCart(item._id, qty, subTotal));
  }, [qty, subTotal]);
  return (
    <>
      <td className="tg-0pky">
        <h4> {item.item}</h4>
      </td>
      <td className="tg-0pky">
        <input
          className="input--quantity"
          type="number"
          onChange={(e) => {
            setQty(e.target.value),
              setSubTotal(Number(item.price) * Number(qty));
            itemDispatch(UpdateProductInCart(item._id, qty, subTotal));
          }}
          value={qty}
          maxLength={"2"}
        />
      </td>
      <td>
        <p>{item.price}</p>
      </td>
      <td className="tg-0pky tg--remove ">
        <button onClick={() => removeItem(item)} className="remove--btn">
          X
        </button>
      </td>
    </>
  );
};
