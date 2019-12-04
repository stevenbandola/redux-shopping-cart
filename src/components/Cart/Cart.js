import React from "react";
import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";
import { useDispatch } from "react-redux";
import { removeProductFromCartAction } from "../../store";

export const Cart = () => {
  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch();
  const removeFromCart = id => dispatch(removeProductFromCartAction(id));

  return (
    <div>
      <ul>
        {cart.map(cartItem => (
          <CartItem
            key={cartItem.id}
            cartItem={cartItem}
            removeFromCart={removeFromCart}
          />
        ))}
      </ul>
      <span>
        Total: ${" "}
        {cart.reduce(
          (total, cartItem) => total + cartItem.price * cartItem.quantity,
          0
        )}
      </span>
    </div>
  );
};
