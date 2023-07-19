import React, { useContext } from "react";

import ProductItem from "../components/Products/ProductItem";
import "./Products.css";
import ProductsContext from "../context/product-context";

const Products = (props) => {
  const context = useContext(ProductsContext).products;
  return (
    <ul className="products-list">
      {context.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
