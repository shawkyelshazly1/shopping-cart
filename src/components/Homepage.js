import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="justify-center items-center flex flex-1 flex-col gap-10">
      <h1 className="text-teal-400 text-7xl font-bold font-AdvantPro">
        Welcome To the Dark Store
      </h1>
      <Link to="shop">
        <button className=" pt-3 pb-3 pr-16 pl-16 rounded-3xl bg-teal-500 text-white font-semibold hover:border-teal-500 hover:border-2 hover:bg-white hover:text-teal-500">
          Go To Shop
        </button>
      </Link>
    </div>
  );
}
