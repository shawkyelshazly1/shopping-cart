import React from "react";
import ProductCard from "./ProductCard";

export default function ProductsGrid({ products, addToCart }) {
  return (
    <div className="grid grid-cols-4 gap-5 p-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}
