import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ShoppingCart, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const join = () => {
  /* ---------------- FIRST NAV BAR (YOUR CATEGORIES NAV) ---------------- */
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const categories = {
    "Phones & Tablets": ["iPhones", "Android Phones","Samsungs", "iPads", "Tablets"],
    Computers: ["Laptops", "Desktops", "Monitors", "Accessories"],
    Gaming: ["Consoles", "Controllers", "Headsets", "Games"],
    "Home Electronics": ["Televisions", "Speakers", "Projectors", "Cameras"],
    Fashion: ["Gucci","Versace","Palazo","Native"],
    Accessories: ["Gold","Ice","Pure-Silver","Diamond"],
    Gadgets: ["Watch","Smart-Watch","Smart-Glasses","Phone-Coolers","Tablets"],
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

  /* ---------------- SECOND NAV BAR (YOUR MENU NAV) ---------------- */
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* ---------------- FIRST NAVBAR (Categories + Logo + Cart) ---------------- */}
      <nav className="h-[100px] fixed top-0 bg-white z-[9999] dark:bg-gray-500 gap-[30px] flex items-center justify-center w-full">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-blue-600">TIMILEHIN</span>
          <span className="text-3xl text-gray-800 dark:text-gray-100 font-semibold">
            STORE
          </span>
        </div>

        <div className="h-[80%] w-[50%] flex border border-gray-300 dark:border-gray-600 rounded-md relative">
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
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
              role="menu"
            >
              {allCategories.map((category) => (
                <div key={category} className="mb-3">
                  <p className="text-sm font-semibold text-blue-600 mb-1">
                    {category}
                  </p>

                  {categories[category] && categories[category].length > 0 ? (
                    <ul className="pl-2 space-y-1">
                      {categories[category].map((item) => (
                        <li
                          key={item}
                          className="text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 px-2 py-1 rounded cursor-pointer"
                          onClick={() => console.log("clicked", item)}
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

        <a
          href="/cart"
          className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          <ShoppingCart className="w-6 h-6 text-gray-700 dark:text-gray-100" />
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-semibold rounded-full h-4 w-4 flex items-center justify-center">
            0
          </span>
        </a>
      </nav>

      {/* ---------------- SECOND NAVBAR (Menu Nav) ---------------- */}
      <nav className="bg-white dark:bg-blue-900 shadow-lg sticky top-[100px] z-40 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center h-[80px]">
          <div className="text-2xl hidden md:flex items-center gap-6">
            <a href="/" className="hover:text-blue-500 transition">
              Home
            </a>
            <a href="/shop" className="hover:text-blue-500 transition">
              Shop
            </a>
            <a href="/about" className="hover:text-blue-500 transition">
              About
            </a>
            <a href="/contact" className="hover:text-blue-500 transition">
              Contact
            </a>
          </div>

          <div className="hidden md:block text-blue-600 font-semibold text-2xl">
            Call us toll free:{" "}
            <span className="text-gray-900 dark:text-gray-100">
              +234 91-652-977-19
            </span>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 dark:text-gray-100"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 flex flex-col items-center gap-4 py-4 shadow-lg">
            <a href="/" className="hover:text-blue-500 transition">
              Home
            </a>
            <a href="/shop" className="hover:text-blue-500 transition">
              Shop
            </a>
            <a href="/about" className="hover:text-blue-500 transition">
              About
            </a>
            <a href="/contact" className="hover:text-blue-500 transition">
              Contact
            </a>
            <p className="text-blue-600 text-sm mt-2">
              Call us toll free:{" "}
              <span className="text-gray-900 dark:text-gray-100">
                +234 91-652-977-19
              </span>
            </p>
          </div>
        )}
      </nav>
    </>
  );
};

export default join;
