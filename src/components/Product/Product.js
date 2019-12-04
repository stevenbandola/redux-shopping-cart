import React from "react";
import { useDispatch } from "react-redux";
import { addProductToCartAction } from "../../store";

export const Product = ({ product }) => {
  const dispatch = useDispatch();
  const addProductToCart = id => dispatch(addProductToCartAction(id));

  return (
    <li>
      {product.name} <br />
      Price: ${product.price}.00 <br />
      <button onClick={() => addProductToCart(product.id)}>Buy</button>
    </li>
  );
};
