import React from "react";

export const CartItem = ({ cartItem, removeFromCart }) => {
  return (
    <li>
      {cartItem.name} x {cartItem.quantity}{" "}
      <button type="button" onClick={() => removeFromCart(cartItem.product_id)}>
        -1
      </button>
    </li>
  );
};
