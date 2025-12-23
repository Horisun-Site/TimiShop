import React from "react";
import { motion } from "framer-motion";
import { Store, ShoppingCart, Truck, ShieldCheck, Tag, Users } from "lucide-react";

const Malt = () => {
  return (
    <div className="relative w-full py-20 bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white overflow-hidden px-6 md:px-20">

      {/* Floating Icons */}
      <motion.div
        className="absolute top-14 left-10 text-green-400"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Store size={45} />
      </motion.div>

      <motion.div
        className="absolute bottom-14 right-10 text-blue-400"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <ShoppingCart size={45} />
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-xl"
      >
        About Us
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-center text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-16"
      >
        Your trusted destination for quality products, unbeatable deals, and a premium shopping experience.
      </motion.p>

      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-10">

        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl backdrop-blur-lg hover:scale-[1.05] transition duration-300"
        >
          <Users size={50} className="text-yellow-300 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Who We Are</h2>
          <p className="opacity-80 text-sm">
            We are a modern e-commerce brand dedicated to bringing you high‑quality products at amazing prices, with customer satisfaction at our core.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl backdrop-blur-lg hover:scale-[1.05] transition duration-300"
        >
          <Tag size={50} className="text-green-300 mb-4" />
          <h2 className="text-2xl font-bold mb-2">What We Offer</h2>
          <p className="opacity-80 text-sm">
            From electronics to fashion, home essentials to gadgets, we provide top‑notch products curated for your lifestyle.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl backdrop-blur-lg hover:scale-[1.05] transition duration-300"
        >
          <ShieldCheck size={50} className="text-blue-300 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
          <p className="opacity-80 text-sm">
            To deliver a reliable, enjoyable, and fast shopping experience powered by trust, innovation, and excellent service.
          </p>
        </motion.div>

      </div>

      {/* Bottom Section */}
      <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4 text-lg leading-relaxed"
        >
          <h2 className="text-3xl font-bold text-yellow-300">Why Shop With Us?</h2>

          <p>
            We combine technology, logistics, and customer‑obsessed values to give you a smooth shopping journey.
          </p>

          <ul className="list-disc ml-6 space-y-2 opacity-90">
            <li>Fast & Reliable Delivery</li>
            <li>Affordable & Quality Products</li>
            <li>Secure Payment & Checkout</li>
            <li>24/7 Customer Support</li>
            <li>Exclusive Deals & Discounts</li>
          </ul>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="bg-white/10 p-10 rounded-3xl backdrop-blur-xl shadow-2xl border border-white/20">
            <Truck size={130} className="text-green-400 drop-shadow-xl" />
          </div>
        </motion.div>
      </div>

      {/* Bottom Glow */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-green-400/20 to-transparent"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
      ></motion.div>
    </div>
  );
};

export default Malt;
