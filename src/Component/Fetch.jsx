import React, { useEffect } from "react";
import { useData } from "../../store";
import Lite from "./Lite";

const Fetch = () => {
  const { products, FetchProducts } = useData();

  useEffect(() => {
    FetchProducts();
  }, [FetchProducts]);

  // Shuffle and slice 10 random products
  const randomTen =
    products.length > 0
      ? [...products] // copy array
          .sort(() => Math.random() - 0.5) // shuffle
          .slice(0, 8) // pick 10
      : [];

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-black p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.length > 0 ? (
        randomTen.map((item) => <Lite key={item.id} product={item} />)
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default Fetch;
