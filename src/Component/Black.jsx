import React from "react";
import { useNavigate } from "react-router-dom";

const Black = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-center text-white px-6">

      {/* Banner Image */}
      <div className="w-[1000px] h-[500px] mb-8 overflow-hidden rounded-xl shadow-2xl">
        <img
          src="https://cdn.pixabay.com/photo/2015/04/04/18/58/thanks-706858_1280.jpg"   // put your generated image in public folder
          alt="Heaven Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Success Message */}
      <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-xl text-center max-w-xl">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          ✅ Order Successful
        </h1>

        <p className="text-lg mb-6">
          Thank you for your purchase! Your order has been successfully placed
          and is now being processed.
        </p>

        <button
          onClick={() => navigate(-1)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Go Back to Previous Page
        </button>
      </div>

    </div>
  );
};

export default Black;