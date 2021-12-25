import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../src/components/Homepage";
import Shop from "../src/components/Shop";
import ShopItem from "../src/components/ShopItem";
import Cart from "../src/components/Cart";
import Nav from "./components/Nav";

export default function RouteSwitch() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const mountedRef = useRef(true);

  const handleAddingToCart = async (id, price, image, title) => {
    let product = cart.filter((cartItem) => cartItem.id === id)[0];
    if (product) {
      product.quantity += 1;
      const udpatedCart = cart.map((cartItem) =>
        cartItem.id === id ? product : cartItem
      );
      setCart(udpatedCart);
    } else {
      product = {
        id: id,
        quantity: 1,
        price: price,
        image: image,
        title: title,
      };
      setCart([...cart, product]);
    }
  };

  const countCartItems = () => {
    let quantity = 0;
    cart.forEach((cartItem) => {
      quantity += cartItem.quantity;
    });
    setCartItemsCount(quantity);
  };
  const calculateTotalPrice = () => {
    let total = 0;
    cart.forEach((cartItem) => {
      total += cartItem.quantity * cartItem.price;
    });

    setTotalPrice(total);
  };

  const updateItemQuantity = (e, id) => {
    const updatedItem = cart.filter((item) => item.id === id)[0];

    updatedItem.quantity = Number(e.target.value);
    const updatedCart = cart.map((item) =>
      item.id === id ? updatedItem : item
    );

    setCart(updatedCart);
  };

  const increaseItemQuantity = (id) => {
    const updatedItem = cart.filter((item) => item.id === id)[0];

    updatedItem.quantity += 1;
    const updatedCart = cart.map((item) =>
      item.id === id ? updatedItem : item
    );

    setCart(updatedCart);
  };

  const decreaseItemQuantity = (id) => {
    const updatedItem = cart.filter((item) => item.id === id)[0];

    updatedItem.quantity -= 1;
    if (updatedItem.quantity === 0) {
      const updatedCart = cart.filter((item) => item.id !== id);
      setCart(updatedCart);
    } else {
      const updatedCart = cart.map((item) =>
        item.id === id ? updatedItem : item
      );
      setCart(updatedCart);
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  useEffect(() => {
    countCartItems();
    calculateTotalPrice();

    return () => {
      mountedRef.current = false;
    };
  }, [cart]);

  return (
    <Router>
      <Nav cartItemsCount={cartItemsCount} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="shop"
          element={<Shop handleAddingToCart={handleAddingToCart} />}
        />
        <Route path="shop/:id" element={<ShopItem />} />
        <Route
          path="shop/cart"
          element={
            <Cart
              cart={cart}
              totalPrice={totalPrice}
              cartItemsCount={cartItemsCount}
              updateItemQuantity={updateItemQuantity}
              removeFromCart={removeFromCart}
              increaseItemQuantity={increaseItemQuantity}
              decreaseItemQuantity={decreaseItemQuantity}
            />
          }
        />
      </Routes>
    </Router>
  );
}
