import React, { useEffect, useState } from "react";
import loadingLogo from "../logo.svg";
import ProductsGrid from "./ProductsGrid";

export default function Shop({ handleAddingToCart }) {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setLoading(true);
    const fetchItems = await fetch("https://fakestoreapi.com/products/");
    const data = await fetchItems.json();
    setItems(data);
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center flex-1">
      {loading ? (
        <img src={loadingLogo} alt="Loading Logo" />
      ) : (
        <ProductsGrid products={items} addToCart={handleAddingToCart} />
      )}
    </div>
  );
}
