import { createStore } from "redux";
import uuid from "uuid/v4";

class Product {
  constructor(name, price) {
    this.id = uuid();
    this.name = name;
    this.price = price;
  }
}
const products = [
  new Product("Toothbrush", 10),
  new Product("Sweater", 20),
  new Product("Backpack", 50)
];

const initialState = {
  products: products,
  cart: []
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      const product = state.products.find(product => product.id === payload);
      const existingCartItem = state.cart.find(
        cartItem => product.name === cartItem.name
      );

      if (!existingCartItem) {
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              id: uuid(),
              product_id: product.id,
              name: product.name,
              price: product.price,
              quantity: 1
            }
          ]
        };
      }

      existingCartItem.quantity++;
      return {
        ...state,
        cart: state.cart.map(cartItem => {
          if (cartItem.name === existingCartItem.name) return existingCartItem;
          return cartItem;
        })
      };
    case "REMOVE_FROM_CART":
      //is it the last one?
      const newCartItem = state.cart.find(
        newCartItem => payload === newCartItem.product_id
      );
      newCartItem.quantity--;

      if (newCartItem.quantity < 0) {
        console.log(newCartItem);
        return {
          ...state,
          //maps through each cartItem, replace old cart item with new one
          cart: state.cart.map(cartItem => {
            if (cartItem.id === newCartItem.id) return newCartItem;
            return cartItem;
          })
        };
      }
      return {
        ...state,
        //filters out all cartItems with quantity of 0
        cart: state.cart.filter(cartItem => cartItem.quantity !== 0)
      };
    default:
      return state;
  }
};

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const addProductToCartAction = id => ({
  type: "ADD_TO_CART",
  payload: id
});

export const removeProductFromCartAction = id => ({
  type: "REMOVE_FROM_CART",
  payload: id
});
