import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ShoppingCart, Heart } from "lucide-react";
import { useCartStore, useWishlistStore } from "../../store";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const cartItems = useCartStore((state) => state.cartItems);
  const cartCount = cartItems.length;

  const wishlistItems = useWishlistStore((state) => state.wishlistItems);
  const wishlistCount = wishlistItems.length;

  const categories = {
    "Phones & Tablets": ["iPhones", "Android Phones", "Samsungs", "iPads", "Tablets"],
    Computers: ["Laptops", "Desktops", "Monitors", "Accessories"],
    Gaming: ["Consoles", "Controllers", "Headsets", "Games"],
    "Home Electronics": ["Televisions", "Speakers", "Projectors", "Cameras"],
    Fashion: ["Gucci", "Versace", "Palazo", "Native"],
    Accessories: ["Gold", "Ice", "Pure-Silver", "Diamond"],
    Gadgets: ["Watch", "Smart-Watch", "Smart-Glasses", "Phone-Coolers", "Tablets"],
  };

  const allCategories = Object.keys(categories);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="h-[100px] fixed top-0 bg-white z-[9999] dark:bg-gray-500 gap-[30px] flex items-center justify-center relative z-[50]">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-3xl font-bold text-blue-600">TIMILEHIN</span>
        <span className="text-3xl text-gray-800 dark:text-gray-100 font-semibold">
          STORE
        </span>
      </div>

      {/* Dropdown + Search */}
      <div className="h-[80%] w-[50%] flex border border-gray-300 dark:border-gray-600 rounded-md relative">
        {/* Dropdown */}
        <div
          ref={dropdownRef}
          className="relative w-[30%] bg-gray-100 dark:bg-gray-700 flex items-center justify-between px-4 cursor-pointer select-none"
        >
          <button
            ref={buttonRef}
            onClick={() => setIsOpen((s) => !s)}
            className="flex items-center justify-between w-full text-sm font-semibold text-gray-800 dark:text-gray-100 py-2"
            aria-expanded={isOpen}
            aria-haspopup="menu"
          >
            <span>All Categories</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          <div
            className={`absolute left-0 top-full mt-2 w-64 bg-white dark:bg-gray-700 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-600 z-[60] p-3 max-h-[320px] overflow-y-auto transform transition-all duration-200 ease-out ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
            role="menu"
          >
            {allCategories.map((category) => (
              <div key={category} className="mb-3">
                <p className="text-sm font-semibold text-blue-600 mb-1">{category}</p>
                {categories[category] && categories[category].length > 0 ? (
                  <ul className="pl-2 space-y-1">
                    {categories[category].map((item) => (
                      <li
                        key={item}
                        className="text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 px-2 py-1 rounded cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="pl-2 text-sm text-gray-500">No items</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="flex items-center w-[70%]">
          <input
            type="text"
            placeholder="Search for Product..."
            className="p-2 w-full bg-transparent text-gray-800 dark:text-gray-100 outline-none"
          />
          <button className="h-[100%] bg-blue-600 hover:bg-blue-700 text-white px-4 flex items-center justify-center transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-3.85z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Cart & Wishlist */}
      <div className="relative flex items-center gap-4">
        {/* Wishlist Icon */}
        <div className="relative cursor-pointer">
          <Link to="/wish" className="relative">
            <Heart size={28} className="text-red-500" />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                {wishlistCount}
              </span>
            )}
          </Link>
        </div>

        {/* Cart Icon */}
        <div className="relative cursor-pointer">
          <Link to="/cart" className="relative">
            <ShoppingCart size={28} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
