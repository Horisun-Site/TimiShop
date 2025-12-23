import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Star, ShoppingBag } from "lucide-react";

const Last = () => {
  return (
    <div className="relative w-full py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Floating stars */}
      <motion.div
        className="absolute top-10 left-10 text-yellow-400"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Star size={40} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 text-yellow-300"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles size={40} />
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center text-5xl font-extrabold drop-shadow-xl mb-6"
      >
        Featured Picks Just For You
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-center text-lg opacity-90 max-w-2xl mx-auto mb-12"
      >
        Hand-selected premium products based on your interests. Experience quality, style, and unbeatable deals.
      </motion.p>

      {/* Floating Product Cards */}
      <div className="flex justify-center gap-6 flex-wrap px-6">
        {["https://hookaba.com/cdn/shop/files/Eye_Rover_Gif_1.gif?v=1749535184", "https://cdn.pixabay.com/photo/2023/08/29/22/28/keyboard-8222233_1280.jpg", "https://cdn.pixabay.com/photo/2023/03/31/06/45/camera-7889301_640.jpg"].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            whileHover={{ scale: 1.08 }}
            className="bg-white/10 backdrop-blur-lg p-5 rounded-2xl shadow-xl border border-white/20 w-64"
          >
            <motion.img
              src={item}
              className="w-full h-40 object-contain mb-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <h2 className="text-xl font-bold mb-2">Trending Product</h2>
            <p className="text-sm opacity-70 mb-4">
              Stylish, durable, and highly recommended by our customers.
            </p>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-xl font-semibold shadow-lg w-full justify-center"
            >
              <ShoppingBag size={18} /> Add To Cart
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Bottom Glow Animation */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-yellow-400/20 to-transparent"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
      ></motion.div>
    </div>
  );
};

export default Last;
