import React from "react";
import Nav from "../Component/Nav";
import Navbar from "../Component/Navbar";
import { Heart } from "lucide-react";
import { useWishlistStore, useCartStore } from "../../store";

const Wishlist = () => {
  const wishlistItems = useWishlistStore((state) => state.wishlistItems);
  const removeFromWishlist = useWishlistStore((state) => state.removeFromWishlist);

  const cartItems = useCartStore((state) => state.cartItems);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <Navbar page="wishlist" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          ❤️ Your Wishlist
        </h1>

        {wishlistItems.length === 0 ? (
          <div className="text-center mt-20 text-gray-600 text-lg sm:text-xl">
            Your wishlist is empty 😢
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((item) => {
              const inCart = cartItems.some((cartItem) => cartItem.id === item.id);

              return (
                <div
                  key={item.id}
                  className="bg-red-300 shadow-md rounded-xl p-4 flex flex-col hover:shadow-lg transition relative"
                >
                  {/* Heart Icon Remove */}
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-3 right-3 text-red-500 hover:text-red-700 transition"
                  >
                    <Heart size={20} />
                  </button>

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-contain mb-4"
                  />
                  <h2 className="font-semibold text-gray-800 text-lg mb-2">
                    {item.title.length > 40 ? item.title.slice(0, 40) + "..." : item.title}
                  </h2>
                  <p className="text-gray-600 font-medium mb-4">${item.price.toFixed(2)}</p>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() =>
                      inCart ? removeFromCart(item.id) : addToCart(item)
                    }
                    className={`mt-auto px-4 py-2 rounded-lg transition text-white ${
                      inCart ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"
                    }`}
                  >
                    {inCart ? "REMOVE FROM CART" : "ADD TO CART"}
                  </button>

                  {/* Explicit Remove from Wishlist Button */}
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                  >
                    REMOVE FROM WISHLIST
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
