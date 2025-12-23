import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white dark:bg-blue-900 shadow-lg sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 sticky flex justify-between items-center h-[100px]">
        {/* Logo */}
        
        {/* Desktop Menu */}
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

        {/* Call Info */}
        <div className="hidden md:block text-blue-600 font-semibold text-2xl">
          Call us toll free:{" "}
          <span className="text-gray-900 dark:text-gray-100">
            +234 91-652-977-19
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 dark:text-gray-100"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
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
  );
};

export default Navbar;
