import React, { useEffect } from "react";
import { useData } from "../../store";
import Lite from "./Lite";

const Feed = () => {
  const { products, FetchProducts } = useData();

  useEffect(() => {
    FetchProducts();
  }, [FetchProducts]);

  return (
    <div className="min-h-screen bg-lime-200 text-black p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.length > 0 ? (
        products.map((item) => <Lite key={item.id} product={item} />)
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default Feed;
