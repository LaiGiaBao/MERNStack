import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions
import { getAllProducts } from "../../State/Product/ProductActions";
import { addProductToCart } from "../../State/Cart/CartActions";

// Component
import { ProductCard } from "./ProductCard";
export const HomeHook = () => {
  const dispatchProducts = useDispatch();
  const products = useSelector((state) => state.productReducer);
  let cart = useSelector((state) => state.cartReducer);
  const user = useSelector((state) => state.userReducer);
  useEffect(() => {
    dispatchProducts(getAllProducts());
    console.log;
    return () => {};
  }, []);

  return (
    <div className="container-grid">
      {console.log(products)}
      {products.map((p) => (
        <ProductCard key={p._id} product={p} />
      ))}
    </div>
  );
};
