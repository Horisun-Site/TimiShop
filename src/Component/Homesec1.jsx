import React from "react";
import { Link } from "react-router-dom";

const Homesec1 = () => {
  return (
    <div className="bg-[#1a1a1a] min-h-[30vh] flex items-center justify-center px-4">
      <main className="text-center max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mt-10 tracking-tight">
          Welcome to <span className="text-blue-600">Timilehin Store</span>
        </h1>

        <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300">
          Discover premium gadgets, accessories & electronics — all at an unbeatable prices.
        </p>

        <button
          className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-300"
        >
          <Link to="/about">Read About-Us</Link>
        </button>
      </main>
    </div>
  );
};

export default Homesec1;
