import React from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../store";

const Lite = ({ product }) => {
  const navigate = useNavigate();

  const cartItems = useCartStore((state) => state.cartItems);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  // Check if product is already in cart
  const inCart = cartItems.some((item) => item.id === product.id);

  return (
    <div className="border rounded-lg shadow-md bg-white dark:bg-gray-800 p-4 flex flex-col justify-between hover:shadow-xl transition">
      
      {/* Image */}
      <div className="h-48 flex items-center justify-center mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full object-contain"
        />
      </div>

      {/* Title + Price */}
      <div className="flex flex-col gap-2 mb-4">
        <div className="flex flex-col justify-between items-center text-gray-800 dark:text-gray-100">
          <h2 className="font-semibold text-lg">${product.price}</h2>
          <p className="text-sm">{product.title}</p>
        </div>

        <div className="flex flex-col text-center justify-between text-sm text-gray-500 dark:text-gray-300">
          <span className="capitalize">{product.category}</span>
          <span>{product.rating?.rate} ⭐</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-[20px]">
        <button
          onClick={() => navigate("/details", { state: product })}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
        >
          CLICK FOR INFO
        </button>

        <button
          onClick={() =>
            inCart ? removeFromCart(product.id) : addToCart(product)
          }
          className={`px-4 py-2 rounded transition text-white ${
            inCart ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {inCart ? "REMOVE FROM CART" : "ADD TO CART"}
        </button>
      </div>
    </div>
  );
};

export default Lite;
