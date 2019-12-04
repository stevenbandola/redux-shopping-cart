import React from "react";
import { useSelector } from "react-redux";

import { Product } from "./Product";

export const ProductList = () => {
  const products = useSelector(state => state.products);

  return (
    <div>
      <h3>Products</h3>
      <ul>
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};
