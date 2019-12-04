import React from "react";
import "./App.css";

import { ProductList } from "./components/Product/ProductList";
import { Cart } from "./components/Cart/Cart";

//basic cart app where will have a list of products and a cart I can add to
//cart will contain products, and the quantity of each, and total up the sum of the cart.
//product will have name, price, and description, and id
//app will use redux store for product list and cart list
//once complete, I will remake the app with typescript, and then move on to backend stuff

function App() {
  return (
    <div className="app">
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
