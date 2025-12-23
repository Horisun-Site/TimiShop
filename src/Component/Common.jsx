import React from "react";
import { Link } from "react-router-dom";
import large from "../assets/large.mp4";
import { motion } from "framer-motion";
import Countdown from "react-countdown";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";

const Common = () => {
  // Countdown renderer
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <span className="text-xl md:text-2xl font-semibold">
        {days}d : {hours}h : {minutes}m : {seconds}s
      </span>
    );
  };

  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={large}
        autoPlay
        muted
        loop
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      {/* Floating Products */}
      <motion.img
        src={product1}
        className="w-28 md:w-40 absolute top-10 left-10 opacity-60"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.img
        src={product2}
        className="w-28 md:w-40 absolute bottom-10 right-10 opacity-60"
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 text-white h-full flex flex-col items-center justify-center text-center px-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-xl">
          Elevate Your Shopping Experience
        </h1>

        <p className="text-lg md:text-2xl max-w-2xl mb-6 opacity-90">
          Exclusive deals, premium products, fast delivery — everything you love
          in one store.
        </p>

        {/* Countdown Timer */}
        <div className="bg-white/10 px-6 py-3 rounded-xl mb-6 backdrop-blur-md border border-white/20">
          <p className="text-sm uppercase tracking-wide opacity-80 mb-1">
            Flash Sales Ends In:
          </p>
          <Countdown
            date={Date.now() + 1000 * 60 * 60 * 24}
            renderer={renderer}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <Link to="/shop">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white text-black px-8 py-3 rounded-xl font-semibold shadow-xl"
            >
              Shop Now
            </motion.button>
          </Link>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="border border-white px-8 py-3 rounded-xl font-semibold shadow-xl"
          >
            Explore Categories
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Common;
