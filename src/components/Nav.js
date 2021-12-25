import React from "react";
import { Link } from "react-router-dom";

export default function Nav({cartItemsCount}) {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Dark Store</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-lg lg:flex-grow">
          <Link to="/">
            <span className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4">
              Home Page
            </span>
          </Link>
          <Link to="shop">
            <span className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4">
              The Shop
            </span>
          </Link>
        </div>
        <div>
          <Link to="shop/cart">
            <span className="inline-block text-sm px-4 py-3 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
              Cart <i className="fas fa-shopping-cart "></i>{" "}
              <span className="text-base font-semibold">{cartItemsCount}</span>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
