import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
import { addProductToCart } from "../../State/Cart/CartActions";
export const ProductCard = ({ product: p }) => {
  const user = useSelector((state) => state.userReducer);
  const dispatchProducts = useDispatch();
  const navigate = useNavigate();
  const SetScroll = () => {
    const maxWordNum = 20; //There can be at max 20 letters in the title, anymore than that and we will have to scroll
    var offset = -1 * (p.item.length / maxWordNum - 1) * 100; //Get the offset
    if (offset > 0) offset = 0; //No need to scroll

    var secondPerOffset = 0.05;
    var duration = secondPerOffset * -1 * offset; //The greater the offset, the greater the duration

    document.documentElement.style.setProperty("--scroll-offset", offset + "%");
    document.documentElement.style.setProperty(
      "--scroll-duration",
      duration + "s"
    );
  };
  const addToCart = (p) => {
    if (!user._id) {
      navigate("/login");
    } else {
      dispatchProducts(addProductToCart(p));
    }
  };
  return (
    <div className="card mx-5">
      <div className="card_like">
        <i className="bx bx-heart"></i>
      </div>
      <div className="card_cart">
        <i className="bx bx-cart-alt"></i>
      </div>

      <div className="card_title">
        <div className="scrollable_text" onMouseEnter={() => SetScroll()}>
          {p.item}
        </div>
      </div>
      <div className="card_price"> {p.price}</div>
      <div className="card_action">
        <button className="product_buy" onClick={() => addToCart(p)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
