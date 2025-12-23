import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "../Component/Nav";
import Navbar from "../Component/Navbar";
import { useCartStore, useWishlistStore } from "../../store";

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Cart store
  const cartItems = useCartStore((state) => state.cartItems);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  // Wishlist store
  const wishlistItems = useWishlistStore((state) => state.wishlistItems);
  const addToWishlist = useWishlistStore((state) => state.addToWishlist);
  const removeFromWishlist = useWishlistStore((state) => state.removeFromWishlist);

  // Get the product from state
  const product = location.state;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-gray-800 dark:text-gray-100">No product data available.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  // Check if in cart
  const inCart = cartItems.some((item) => item.id === product.id);

  // Check if in wishlist
  const inWishlist = wishlistItems.some((item) => item.id === product.id);

  return (
    <div>
      <Nav />
      <Navbar />

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6 flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-w-full max-h-[500px] object-contain rounded shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col item-center justify-center gap-4">
          <h1 className="text-4xl text-center font-bold">{product.title}</h1>
          <p className="text-gray-600 text-2xl dark:text-gray-300">
            <span className="text-blue-300 text-3xl">Description:</span> {product.description}
          </p>
          <p className="text-xl font-semibold">Price: ${product.price}</p>
          <p className="text-sm text-gray-500">Category: {product.category}</p>
          <p className="text-sm text-gray-500">
            Rating: {product.rating?.rate} ⭐ ({product.rating?.count} reviews)
          </p>

          {/* Add To Wishlist */}
          <button
            onClick={() =>
              inWishlist
                ? removeFromWishlist(product.id)
                : addToWishlist(product)
            }
            className={`mt-4 px-6 py-2 rounded transition text-white ${
              inWishlist ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {inWishlist ? "REMOVE FROM WISHLIST" : "ADD TO WISHLIST"}
          </button>

          {/* Add / Remove from Cart */}
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
    </div>
  );
};

export default Details;
